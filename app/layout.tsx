import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./reusables/Header";
import Footer from "./reusables/footer";
import { Work_Sans  } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dutiful-lp",
  description: "Accept and sell appointment",
  icons: {
    icon: "/duftiLogo.svg"
  }
};



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable} suppressHydrationWarning>
      <body className="font-circular font-recoleta">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
