import { NextRequest, NextResponse } from "next/server";

/**
 * Creates an on-site (inline) PayFast session and returns { uuid }.
 * NOTE: Confirm field names/signature against your PayFast dashboard and docs.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name, email, phone, address, city, code,
    bookId, bookTitle, amount,
  } = body || {};

  // Basic validation
  if (!bookTitle || !amount || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Build form data expected by PayFast
  const form = new URLSearchParams();
  form.set("merchant_id", process.env.PAYFAST_MERCHANT_ID || "");
  form.set("merchant_key", process.env.PAYFAST_MERCHANT_KEY || "");
  form.set("return_url", process.env.PAYFAST_RETURN_URL || "");
  form.set("cancel_url", process.env.PAYFAST_CANCEL_URL || "");
  form.set("notify_url", process.env.PAYFAST_NOTIFY_URL || "");
  form.set("amount", amount); // "299.00"
  form.set("item_name", bookTitle);
  form.set("m_payment_id", `ord_${Date.now()}_${bookId}`);
  // optional buyer meta (not all fields are used in signature)
  form.set("name_first", name || "");
  form.set("email_address", email || "");

  // [Unverified] Endpoint path/name – confirm in PayFast “Onsite/Process” docs.
  const endpoint =
    process.env.PAYFAST_SANDBOX === "true"
      ? "https://sandbox.payfast.co.za/onsite/process"
      : "https://www.payfast.co.za/onsite/process";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      // Some integrations require Authorization; others accept simple POST.
      // If your merchant settings require auth, add it here:
      // "Authorization": "Basic " + Buffer.from(`${id}:${key}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("PayFast onsite error:", text);
    return NextResponse.json({ error: "PayFast error" }, { status: 500 });
  }

  // Expected response: { uuid: "..." } for inline engine.js
  const data = await res.json().catch(async () => ({ raw: await res.text() }));
  const uuid = (data as any)?.uuid;

  if (!uuid) {
    console.error("No UUID in response:", data);
    return NextResponse.json({ error: "Missing uuid" }, { status: 500 });
  }

  return NextResponse.json({ uuid });
}
