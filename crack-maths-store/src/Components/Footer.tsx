export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm opacity-70">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} Crack the Maths Code.</p>
          <div className="flex gap-4">
            <a href="/privacy">Privacy</a>
            <a href="/returns">Returns</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
