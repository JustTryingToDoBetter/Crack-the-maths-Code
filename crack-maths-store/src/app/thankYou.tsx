// app/thank-you/page.tsx
export default function ThankYou() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-md rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-bold">Order received 🎉</h1>
        <p className="mt-2">We’ve emailed your receipt and will ship shortly.</p>
      </div>
    </main>
  );
}
