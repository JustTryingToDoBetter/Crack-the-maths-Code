import Link from "next/link";
import Button from "./Button";
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Crack<span className="text-brand-mint">Maths</span>
        </Link>
        <nav className="hidden gap-6 md:flex text-sm opacity-90">
          <a href="#inside">See inside</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button as={Link} href="/buy" className="hidden md:inline-flex">Buy Now</Button>
      </div>
    </header>
  );
}
