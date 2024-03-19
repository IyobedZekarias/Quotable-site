import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quotable",
  description: "Quotable company site",
  icons: {
    icon: "icon.ico"
  },
  keywords: ["Quotable", "Sell Side", "Buy Side", "Accounting", "Working", "ERP", "Valuation", "Valuation+", "Selling"],
  openGraph: {
    images: ['/opengraph-image.jpg'],
    type: "website",
    url: "https://quotable.com",
    title: "Qutable Landing Page",
    description: "The landing page for Quotable to buy and sell companies",
    siteName: "Quotable landing page",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
