import Hero from "../components/Hero";
import Preview from "../components/Preview";
import Features from "../components/Features";
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Preview />
      <Features />
    </main>
  );
}
