/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { bg:"#0A0718", purple:"#9B6CB7", mint:"#3ED3B4", blue:"#6BA8FF" }
      },
      boxShadow: {
        neon:"0 0 16px rgba(62,211,180,.55), 0 0 32px rgba(155,108,183,.35)",
        glow:"0 0 40px rgba(107,168,255,.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 10% -10%, rgba(155,108,183,.55) 0%, transparent 60%), radial-gradient(1000px 500px at 90% 0%, rgba(62,211,180,.35) 0%, transparent 60%)"
      }
    }
  },
  plugins:[]
}
