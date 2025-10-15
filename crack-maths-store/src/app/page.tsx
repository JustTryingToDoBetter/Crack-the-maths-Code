import Link from "next/link";
import Button from "@/Components/Button";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      {/* HERO */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Crack the <span className="text-brand-mint">Maths</span> Code
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-prose">
            A practical maths book that helps learners master the basics—fast.
            Perfect for Grades 4–12, tutors, and parents.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as={Link} href="/buy">Buy Now</Button>
            <Link
              href="#inside"
              className="inline-flex rounded-2xl px-6 py-3 border border-white/20 hover:border-white/40 transition"
            >
              See inside
            </Link>
          </div>

          {/* TRUST */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <span>Secure checkout</span>
            <span>Courier delivery in 2–4 days</span>
            <span>30-day money-back guarantee</span>
          </div>
        </div>

        {/* PRODUCT CARD */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-purple/30 to-brand-mint/20 blur-2xl opacity-60" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-neon">
            <div className="aspect-[4/5] w-full rounded-2xl bg-black/30 grid place-items-center">
              {/* replace with real cover image */}
              <span className="opacity-70">Book Cover Preview</span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Physical Book</h3>
              <p className="text-2xl font-bold">R299.00</p>
            </div>
            <p className="mt-2 text-sm text-white/70">
              200+ exercises · step-by-step methods · answer keys.
            </p>
            <Button as={Link} href="/buy" className="mt-5 w-full">Checkout</Button>
          </div>
        </div>
      </section>

      {/* SEE INSIDE */}
      <section id="inside" className="mt-24">
        <h2 className="text-3xl font-bold">Inside the book</h2>
        <p className="mt-2 text-white/75 max-w-3xl">
          Diagnostic warm-ups, worked examples, and progressive drills designed for real improvement.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Sample Page A</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Sample Page B</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Sample Page C</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-24">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Who is it for?</summary>
            <p className="mt-2 text-white/75">Learners in grades 4–12, parents, and tutors.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Delivery time?</summary>
            <p className="mt-2 text-white/75">2–4 business days via courier, tracking provided.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Returns?</summary>
            <p className="mt-2 text-white/75">30-day money-back guarantee. No questions asked.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
