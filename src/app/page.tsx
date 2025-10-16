"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(
          (link as HTMLAnchorElement).getAttribute("href")!
        );
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      {/* HERO SECTION */}
      <section className="grid items-center gap-10 md:grid-cols-2 relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent rounded-3xl -z-10" />

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Crack the <span className="text-brand-mint">Maths</span> Code
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-prose">
            A practical maths book that helps learners master the basics—fast.
            Perfect for Grades 4–12, tutors, and parents.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as={Link} href="#product">
              Buy Now
            </Button>
            <Link
              href="#inside"
              className="inline-flex rounded-2xl px-6 py-3 border border-white/20 hover:border-white/40 transition"
            >
              See inside
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center gap-6 text-sm text-white/70">
            <span>🛡️ Secure Checkout</span>
            <span>🚚 2–4 Day Courier Delivery</span>
            <span>💰 30-Day Money-Back Guarantee</span>
          </div>
        </div>

        {/* Book Preview */}
        <div id="product" className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-purple/30 to-brand-mint/20 blur-2xl opacity-60" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-neon">
            <Image
              src="/images/book-cover.webp"
              alt="Crack the Maths Code book cover"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
            <div className="mt-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Physical Book</h3>
              <p className="text-2xl font-bold">R299.00</p>
            </div>
            <p className="mt-2 text-sm text-white/70">
              200+ exercises · step-by-step methods · answer keys.
            </p>
            <Button as={Link} href="/buy" className="mt-5 w-full">
              Checkout
            </Button>
          </div>
        </div>
      </section>

      {/* Inside Section */}
      <section id="inside" className="mt-24 py-16">
        <h2 className="text-3xl font-bold mb-4">Inside the book</h2>
        <p className="text-white/75 max-w-3xl mb-10">
          Diagnostic warm-ups, worked examples, and progressive drills designed
          for real improvement.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:scale-[1.02] transition"
            >
              <Image
                src={`/images/inside-page-${i}.webp`}
                alt={`Sample inside page ${i}`}
                width={400}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-24 py-16">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="grid gap-4">
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">
              Who is it for?
            </summary>
            <p className="mt-2 text-white/75">
              Learners in grades 4–12, parents, and tutors.
            </p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">
              Delivery time?
            </summary>
            <p className="mt-2 text-white/75">
              2–4 business days via courier, tracking provided.
            </p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">
              Returns?
            </summary>
            <p className="mt-2 text-white/75">
              30-day money-back guarantee. No questions asked.
            </p>
          </details>
        </div>
      </section>

      {/* Floating Buy Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <Button
          as="a"
          href="#product"
          className="px-8 py-4 rounded-full text-lg shadow-glow animate-pulse"
        >
          Buy Now 💫
        </Button>
      </div>
    </div>
  );
}
