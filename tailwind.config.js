/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px_600px_at_10%_-10%,rgba(155,108,183,0.55)_0%,transparent_60%),radial-gradient(1000px_500px_at_90%_0%,rgba(62,211,180,0.35)_0%,transparent_60%)",
      },
      boxShadow: {
        neon:
          "0 0 16px rgba(62,211,180,0.55), 0 0 32px rgba(155,108,183,0.35)",
        glow: "0 0 40px rgba(107,168,255,0.35)",
      },
      colors: {
        neonMint: "#3ED3B4",
        neonPurple: "#9B6CB7",
        darkBg: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
