import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const sora = Sora({ subsets: ["latin"], weight: ["300","400","600","700"] });

export const metadata = {
  title: "Crack the Maths Code – Official Store",
  description: "Buy Crack the Maths Code quickly and securely.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.className} min-h-screen text-white bg-hero-radial`}>
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        {/* If you use PayFast inline */}
        <Script src="/payfast-inline.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
