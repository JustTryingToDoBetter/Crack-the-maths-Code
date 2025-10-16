"use client";

import { motion } from "framer-motion";

export default function Preview() {
  return (
    <section id="preview" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* book placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass soft-glow aspect-[4/5] w-full rounded-3xl grid place-items-center text-white/70"
        >
          {/* replace this with your actual cover when ready */}
          <span>📘 Book Preview</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">See what’s inside</h2>
          <p className="text-white/80">
            Concise explanations, graded practice, and answer keys for rapid progress.
            Ideal for learners, tutors, and parents across Grades 4–12.
          </p>
          <ul className="text-white/80 list-disc pl-5 space-y-2">
            <li>Step-by-step worked examples</li>
            <li>Progressive drills with diagnostics</li>
            <li>Answer keys to check understanding</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
