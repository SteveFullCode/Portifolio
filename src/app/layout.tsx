"use client";

import { Inter as FontSans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "@/assets/row.svg";
type RootLayoutProps = {
  children: ReactNode;
};

export const poppins = Poppins({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-pop",
  subsets: ["latin"],
  display: "swap",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <link rel="icon" href="./favicon.ico" sizes="eu" />
      <body
        className={cn(
          "flex min-h-screen bg-background font-sans flex-col relative",
          `${poppins.variable}`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-1 md:right-4 z-50 "
            >
              <Image
                src={Arrow}
                alt="Eu"
                height={40}
                title="Linkedin"
                className="cursor-pointer"
              />
            </button>
          )}
          <div className="" id="home">
            <main className="h-full w-full pb-5 relative">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
