import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { buildOrderMessage, sendTelegramMessage } from "@/lib/telegram";

type Env = {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
};

/**
 * Best-effort, per-isolate rate limiting. Cloudflare may spin up multiple
 * isolates, so this does not guarantee a hard global limit — it only
 * discourages rapid-fire spam from the same instance. For a stronger
 * guarantee, add Cloudflare Turnstile on the form or a KV-backed limiter.
 */
const recentSubmissions = new Map<string, number>();
const WINDOW_MS = 30_000;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const last = recentSubmissions.get(key);
  recentSubmissions.set(key, now);
  if (recentSubmissions.size > 500) {
    recentSubmissions.clear();
  }
  return typeof last === "number" && now - last < WINDOW_MS;
}

function getEnv(): Env {
  try {
    // Available when running on Cloudflare via OpenNext (reads the env
    // vars/bindings configured in wrangler.jsonc / the dashboard).
    const { env } = getCloudflareContext();
    const typedEnv = env as Env | undefined;
    if (typedEnv?.TELEGRAM_BOT_TOKEN) return typedEnv;
  } catch {
    // Not running on Cloudflare (e.g. local `next dev`) — fall through.
  }
  // Falls back to process.env for local `next dev` with .env.local.
  return {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  };
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  // Honeypot — silently accept but do nothing.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const address = String(body.address || "").trim();
  const product = String(body.product || "").trim();
  const quantity = String(body.quantity || "").trim();
  const note = String(body.note || "").trim();

  const phoneDigits = phone.replace(/[\s.()-]/g, "");
  const errors: string[] = [];
  if (!name) errors.push("Họ và tên không được để trống.");
  if (!/^0\d{9}$/.test(phoneDigits)) errors.push("Số điện thoại không hợp lệ.");
  if (!product) errors.push("Sản phẩm phải được chọn.");
  const qtyNumber = Number(quantity);
  if (!quantity || Number.isNaN(qtyNumber) || qtyNumber <= 0) {
    errors.push("Số lượng phải lớn hơn 0.");
  }
  if (name.length > 120 || phone.length > 30 || address.length > 300 || note.length > 500) {
    errors.push("Nội dung quá dài.");
  }

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(`${ip}:${phoneDigits}`)) {
    return NextResponse.json(
      { ok: false, error: "Bạn gửi hơi nhanh, vui lòng thử lại sau ít giây." },
      { status: 429 },
    );
  }

  const env = getEnv();
  const message = buildOrderMessage({ name, phone, address, product, quantity, note });

  try {
    await sendTelegramMessage(message, env);
  } catch (err) {
    console.error("Telegram send failed", err);
    return NextResponse.json(
      { ok: false, error: "Không thể gửi thông báo. Vui lòng thử lại." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
