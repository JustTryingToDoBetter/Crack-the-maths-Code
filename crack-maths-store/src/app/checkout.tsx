// app/api/payfast/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PAYFAST_HOST = process.env.PAYFAST_SANDBOX === "true"
  ? "https://sandbox.payfast.co.za/eng/process"
  : "https://www.payfast.co.za/eng/process";

function sign(params: Record<string,string>) {
  // Build query string in key=value&key=value..., append passphrase, MD5
  const q = Object.entries(params)
    .map(([k,v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");
  const payload = `${q}&passphrase=${encodeURIComponent(process.env.PAYFAST_PASSPHRASE!)}`;
  return crypto.createHash("md5").update(payload).digest("hex");
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const amount = (Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_CENTS)/100).toFixed(2);

  const pfParams: Record<string,string> = {
    merchant_id: process.env.PAYFAST_MERCHANT_ID!,
    merchant_key: process.env.PAYFAST_MERCHANT_KEY!,
    return_url: process.env.PAYFAST_RETURN_URL!,
    cancel_url: process.env.PAYFAST_CANCEL_URL!,
    notify_url: process.env.PAYFAST_NOTIFY_URL!,
    amount,
    item_name: process.env.NEXT_PUBLIC_PRODUCT_NAME!,
    name_first: String(form.get("name")||""),
    email_address: String(form.get("email")||""),
    m_payment_id: `ord_${Date.now()}`, // your order id
  };

  const signature = sign(pfParams);
  const html = `
    <html><body onload="document.forms[0].submit()">
      <form method="POST" action="${PAYFAST_HOST}">
        ${Object.entries(pfParams).map(([k,v])=>`<input type="hidden" name="${k}" value="${v}">`).join("")}
        <input type="hidden" name="signature" value="${signature}">
        <noscript><button type="submit">Continue to Payfast</button></noscript>
      </form>
    </body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" }});
}
