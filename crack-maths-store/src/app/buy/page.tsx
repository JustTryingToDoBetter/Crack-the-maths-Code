"use client";
import { useState } from "react";
import Button from "@/Components/Button";

export default function Buy() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", address:"", city:"", code:"" });
  const total = (Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_CENTS)/100 || 299).toFixed(2);

  const fields: {key:keyof typeof form; label:string; type?:string}[] = [
    { key:"name", label:"Full name" },
    { key:"email", label:"Email", type:"email" },
    { key:"phone", label:"Phone" },
    { key:"address", label:"Delivery address" },
    { key:"city", label:"City" },
    { key:"code", label:"Postal code" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_.7fr]">
        {/* FORM */}
        <form method="POST" action="/api/payfast/checkout"
              className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4">
            {fields.map(({key,label,type})=>(
              <label key={key} className="grid gap-2">
                <span className="text-sm text-white/80">{label}</span>
                <input
                  name={key}
                  required
                  type={type || "text"}
                  onChange={(e)=>setForm({...form,[key]:e.target.value})}
                  className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-brand-mint/60"
                />
              </label>
            ))}
          </div>
          <Button className="mt-6 w-full">Pay Securely</Button>
          <p className="mt-3 text-xs text-white/60">
            Payments processed securely. You’ll receive email confirmation immediately.
          </p>
        </form>

        {/* ORDER SUMMARY */}
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Book</span><span>R{total}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>R69.00</span></div>
            <div className="flex justify-between font-semibold text-white">
              <span>Total</span><span>R{(Number(total)+69).toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 text-xs text-white/70">
            • Secure card / Instant EFT / QR wallets<br/>
            • 30-day money-back guarantee
          </div>
        </aside>
      </div>
    </div>
  );
}
