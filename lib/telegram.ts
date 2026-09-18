export type OrderPayload = {
  name: string;
  phone: string;
  address?: string;
  product: string;
  quantity: string;
  note?: string;
};

/** Escapes text for Telegram's HTML parse mode. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildOrderMessage(order: OrderPayload): string {
  const now = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date());

  const lines = [
    "<b>ĐƠN HÀNG MỚI</b>",
    "",
    `👤 Khách hàng: ${escapeHtml(order.name)}`,
    `📞 SĐT: ${escapeHtml(order.phone)}`,
    `📍 Địa chỉ: ${escapeHtml(order.address || "Chưa cung cấp")}`,
    `🥥 Sản phẩm: ${escapeHtml(order.product)}`,
    `📦 Số lượng: ${escapeHtml(order.quantity)} kg`,
    `📝 Ghi chú: ${escapeHtml(order.note || "Không có")}`,
    "",
    `⏰ Thời gian: ${now}`,
  ];

  return lines.join("\n");
}

/**
 * Sends a message via the Telegram Bot API.
 * TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be provided as environment
 * variables (see .env.example) and must never be exposed to the client.
 */
export async function sendTelegramMessage(text: string, env: {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}): Promise<void> {
  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Thiếu cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID");
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Gửi Telegram thất bại (${res.status}): ${body}`);
  }
}
