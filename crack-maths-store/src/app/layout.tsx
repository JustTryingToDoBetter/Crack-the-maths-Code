import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const pop = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });

export const metadata = {
  title: "Crack the Maths Code – Official Store",
  description: "Buy Crack the Maths Code quickly and securely.",
  openGraph: { title: "Crack the Maths Code", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pop.className} bg-brand-bg bg-hero-radial`}>
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
