import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pop = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Crack the Maths Code – Official Store",
  description:
    "Buy Crack the Maths Code book online. Fast courier delivery, money-back guarantee, and trusted checkout.",
  openGraph: {
    title: "Crack the Maths Code – Official Store",
    description:
      "Master maths fundamentals fast with Crack the Maths Code. Available now with secure checkout.",
    url: "https://crackthemathscode.co.za",
    siteName: "Crack the Maths Code",
    images: [
      {
        url: "/images/book-cover.webp",
        width: 1200,
        height: 630,
        alt: "Crack the Maths Code Book Cover",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crack the Maths Code – Official Store",
    description:
      "A practical maths book that helps learners master the basics—fast.",
    images: ["/images/book-cover.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pop.className} bg-brand-bg bg-hero-radial min-h-screen text-white scroll-smooth`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-140px)] relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
