import type { Metadata, Viewport } from "next";
import { Caveat, Manrope, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: "Vaibhav Foundation Welfare Society | NGO in Jaipur",
    template: `%s | Vaibhav Foundation Welfare Society`,
  },
  description:
    "Vaibhav Foundation Welfare Society is a registered welfare society in Jaipur working for education support, healthcare awareness, women empowerment, child welfare, food support and community welfare.",
  icons: {
    icon: "/images/cropped-Vaibhav-Foundation.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${nunito.variable} ${caveat.variable}`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
