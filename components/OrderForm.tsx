"use client";

import { FormEvent, useState } from "react";
import { PRODUCTS } from "./Products";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (String(data.get("company") || "").trim().length > 0) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const product = String(data.get("product") || "");
    const quantity = String(data.get("quantity") || "");

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Vui lòng nhập họ và tên.";
    const phoneDigits = phone.replace(/[\s.()-]/g, "");
    if (!/^0\d{9}$/.test(phoneDigits)) {
      nextErrors.phone = "Số điện thoại không hợp lệ (VD: 0378259987).";
    }
    if (!product) nextErrors.product = "Vui lòng chọn sản phẩm.";
    const qtyNumber = Number(quantity);
    if (!quantity || Number.isNaN(qtyNumber) || qtyNumber <= 0) {
      nextErrors.quantity = "Số lượng phải lớn hơn 0.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address: String(data.get("address") || "").trim(),
          product,
          quantity,
          note: String(data.get("note") || "").trim(),
          company: "",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Gửi thất bại");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Đã có lỗi xảy ra.");
    }
  }

  return (
    <section id="dat-hang" className="bg-forest-900 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl text-ivory-50 md:text-4xl">
            Đặt hạt đác tươi ngay hôm nay
          </h2>
          <p className="mt-3 font-body text-ivory-100/80">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-organic bg-ivory-50 p-6 shadow-soft md:p-10"
          >
            {/* Honeypot field — hidden from real visitors, catches basic bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Công ty</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="font-body text-sm font-medium text-forest-800">
                Họ và tên *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                placeholder="Nguyễn Văn A"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="font-body text-sm font-medium text-forest-800">
                Số điện thoại *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                placeholder="0378259987"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="address" className="font-body text-sm font-medium text-forest-800">
                Địa chỉ nhận hàng
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                placeholder="Số nhà, đường, quận/huyện, tỉnh/thành"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="product" className="font-body text-sm font-medium text-forest-800">
                  Sản phẩm *
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                >
                  <option value="" disabled>
                    Chọn sản phẩm
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} — {p.price}
                    </option>
                  ))}
                </select>
                {errors.product && <p className="mt-1 text-xs text-red-600">{errors.product}</p>}
              </div>

              <div>
                <label htmlFor="quantity" className="font-body text-sm font-medium text-forest-800">
                  Số lượng (kg) *
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="0.5"
                  step="0.5"
                  required
                  className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                  placeholder="1"
                />
                {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="note" className="font-body text-sm font-medium text-forest-800">
                Ghi chú
              </label>
              <textarea
                id="note"
                name="note"
                rows={3}
                className="mt-1.5 w-full rounded-organic-sm border border-forest-100 bg-white px-4 py-3 font-body text-forest-900 outline-none focus:border-forest-400"
                placeholder="Ví dụ: giao giờ hành chính, gọi trước khi giao..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-organic-sm bg-forest-700 px-6 py-3.5 font-body text-sm font-semibold text-ivory-50 transition-colors hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Đang gửi..." : "Gửi đơn hàng"}
            </button>

            {status === "success" && (
              <p role="status" className="rounded-organic-sm bg-forest-100 px-4 py-3 font-body text-sm text-forest-800">
                Đã nhận thông tin! Chúng tôi sẽ liên hệ với bạn sớm nhất.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="rounded-organic-sm bg-red-50 px-4 py-3 font-body text-sm text-red-700">
                Không thể gửi thông tin. Vui lòng thử lại.{" "}
                {errorMsg && <span className="opacity-70">({errorMsg})</span>}
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
