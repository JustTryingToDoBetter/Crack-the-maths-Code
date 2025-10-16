"use client";

import { useState } from "react";
import Button from "../../components/Button";
import { books } from "../../data/book";
import { motion } from "framer-motion";
import PaymentModal from "../../components/PaymentModal";

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
  const [busy, setBusy] = useState(false);
  const [uuid, setUuid] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fields: { key: keyof typeof form; label: string; type?: string }[] = [
    { key: "name", label: "Full name" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Delivery address" },
    { key: "city", label: "City" },
    { key: "code", label: "Postal code" },
  ];

  const shipping = 69;
  const total = (selected.priceCents / 100 + shipping).toFixed(2);

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/payfast/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId: selected.id,
          bookTitle: selected.title,
          amount: (selected.priceCents / 100).toFixed(2),
          ...form,
        }),
      });
      if (!res.ok) throw new Error("Failed to create payment session");
      const data = await res.json();
      if (!data?.uuid) throw new Error("No UUID received");
      setUuid(data.uuid);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      alert("Could not start payment. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_.7fr]">
        <form onSubmit={handlePay} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          {/* Books */}
          <div className="grid gap-3 mb-6">
            <h2 className="text-lg font-semibold text-white/90">Choose your book</h2>
            <div className="grid gap-3">
              {books.map((b) => (
                <motion.label
                  key={b.id}
                  whileHover={{ scale: 1.01 }}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
                    selected.id === b.id
                      ? "border-brand-mint bg-brand-mint/10 shadow-[0_0_24px_rgba(62,211,180,.25)]"
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
                  <div className="font-semibold">
                    R{(b.priceCents / 100).toFixed(0)}
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Info */}
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

          {/* Hidden fields for server */}
          <input type="hidden" name="bookId" value={selected.id} />
          <input type="hidden" name="bookTitle" value={selected.title} />
          <input type="hidden" name="amount" value={(selected.priceCents / 100).toFixed(2)} />

          <Button className="mt-6 w-full" disabled={busy}>
            {busy ? "Starting secure payment..." : "Pay Securely"}
          </Button>
          <p className="mt-3 text-xs text-white/60">
            Payments processed on-site via PayFast. You’ll receive an email receipt.
          </p>
        </form>

        {/* Summary */}
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{selected.title}</span>
              <span>R{(selected.priceCents / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>R{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>R{total}</span>
            </div>
          </div>
          <div className="mt-6 text-xs text-white/70">
            • Cards / Instant EFT / QR wallets<br/>• 30-day money-back guarantee
          </div>
        </aside>
      </div>

      <PaymentModal open={modalOpen} uuid={uuid} onClose={() => setModalOpen(false)} />
    </div>
  );
}
