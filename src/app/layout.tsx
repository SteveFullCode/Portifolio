import { Inter as FontSans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

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
          <div className="" id="home">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
