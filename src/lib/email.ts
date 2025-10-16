import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendReceipt({
  name,
  email,
  bookTitle,
  amount,
}: {
  name: string;
  email: string;
  bookTitle: string;
  amount: string;
}) {
  const html = `
    <h2>Thank you for your purchase, ${name}!</h2>
    <p>You purchased <strong>${bookTitle}</strong> for <strong>R${amount}</strong>.</p>
    <p>Your order will be delivered within 2-4 working days.</p>
    <hr>
    <p style="font-size:13px;color:#777">Crack the Maths Code • Learn fast. Learn smart.</p>
  `;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: `Your ${bookTitle} order receipt`,
      html,
    });
  } catch (err) {
    console.error("❌ Failed to send email receipt:", err);
  }
}
