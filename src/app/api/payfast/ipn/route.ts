import { NextRequest, NextResponse } from "next/server";
import { sendReceipt } from "../../../../lib/email";


export async function POST(req: NextRequest) {
  const data = await req.formData();
  const status = data.get("payment_status");
  const name = String(data.get("name_first") || "");
  const email = String(data.get("email_address") || "");
  const bookTitle = String(data.get("item_name") || "Crack the Maths Code");
  const amount = String(data.get("amount_gross") || "0.00");

  if (status === "COMPLETE" && email) {
    console.log("✅ Payment complete. Sending email...");
    await sendReceipt({ name, email, bookTitle, amount });
  } else {
    console.log("⚠️ Payment not complete or missing email.");
  }

  return NextResponse.json({ ok: true });
}
