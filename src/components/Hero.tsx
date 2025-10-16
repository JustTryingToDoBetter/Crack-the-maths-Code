"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center justify-center text-center min-h-[86vh] px-6"
    >
      {/* subtle radial overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(155,108,183,.28),transparent_60%),radial-gradient(700px_360px_at_90%_0%,rgba(62,211,180,.22),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] drop-shadow-[0_8px_30px_rgba(0,0,0,.25)]">
          Crack the <span className="text-white/90">Maths</span> Code
        </h1>
        <p className="mt-5 text-lg md:text-xl text-white/85">
          Learn faster with crystal-clear methods, step-by-step examples, and focused drills.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/buy"
            className="soft-glow inline-flex rounded-full px-7 py-3 font-semibold text-[#0a0718] bg-white/90 hover:bg-white"
          >
            Buy Now
          </Link>
          <a
            href="#preview"
            className="soft-glow inline-flex rounded-full px-7 py-3 font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/14"
          >
            See Inside
          </a>
        </div>

        {/* scroll hint */}
        <div className="mt-16 text-white/70 text-sm">Scroll to explore ↓</div>
      </motion.div>
    </section>
  );
}
