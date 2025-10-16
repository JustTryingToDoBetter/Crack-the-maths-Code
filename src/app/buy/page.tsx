"use client";

import { useState } from "react";
import Button from "../../components/Button";
import { books } from "../../data/book";


export default function Buy() {
  const [selected, setSelected] = useState(books[0]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    code: "",
  });

  const fields: { key: keyof typeof form; label: string; type?: string }[] = [
    { key: "name", label: "Full name" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Delivery address" },
    { key: "city", label: "City" },
    { key: "code", label: "Postal code" },
  ];

  const total = (selected.priceCents / 100 + 69).toFixed(2);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_.7fr]">
        {/* Form */}
        <form
          method="POST"
          action="/api/payfast/checkout"
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          {/* Product Selection */}
          <div className="grid gap-3 mb-6">
            <h2 className="text-lg font-semibold text-white/90">
              Choose your book
            </h2>
            {books.map((b) => (
              <label
                key={b.id}
                className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                  selected.id === b.id
                    ? "border-brand-mint bg-brand-mint/10"
                    : "border-white/10 hover:border-brand-mint/40"
                }`}
              >
                <input
                  type="radio"
                  name="bookId"
                  value={b.id}
                  checked={selected.id === b.id}
                  onChange={() => setSelected(b)}
                  className="hidden"
                />
                <div>
                  <div className="font-medium">{b.title}</div>
                  <div className="text-sm text-white/70">{b.description}</div>
                </div>
                <div className="font-semibold">R{(b.priceCents / 100).toFixed(0)}</div>
              </label>
            ))}
          </div>

          {/* Customer Info */}
          <div className="grid gap-4">
            {fields.map(({ key, label, type }) => (
              <label key={key} className="grid gap-2">
                <span className="text-sm text-white/80">{label}</span>
                <input
                  name={key}
                  required
                  type={type || "text"}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-brand-mint/60"
                />
              </label>
            ))}
          </div>

          <input type="hidden" name="bookId" value={selected.id} />
          <input type="hidden" name="bookTitle" value={selected.title} />
          <input type="hidden" name="amount" value={(selected.priceCents / 100).toFixed(2)} />

          <Button className="mt-6 w-full">Pay Securely</Button>
          <p className="mt-3 text-xs text-white/60">
            Payments processed securely. You’ll receive an email receipt.
          </p>
        </form>

        {/* Order summary */}
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{selected.title}</span>
              <span>R{(selected.priceCents / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>R69.00</span>
            </div>
            <div className="flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>R{total}</span>
            </div>
          </div>
          <div className="mt-6 text-xs text-white/70">
            • Secure card / Instant EFT / QR wallets  
            <br />• 30-day money-back guarantee
          </div>
        </aside>
      </div>
    </div>
  );
}
