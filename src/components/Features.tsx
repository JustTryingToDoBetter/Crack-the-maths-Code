"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Concept-Driven", desc: "Clarity first. No fluff.", emoji: "🧩" },
  { title: "Practice-Focused", desc: "Drills that build mastery.", emoji: "✏️" },
  { title: "Visually Clear", desc: "Layouts that guide the eye.", emoji: "🌈" },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why it works</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass soft-glow rounded-2xl p-6"
          >
            <div className="text-2xl">{f.emoji}</div>
            <div className="mt-3 font-semibold text-lg">{f.title}</div>
            <div className="mt-2 text-white/80">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
