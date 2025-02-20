import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import Header from "@/components/Header/Header";
import CenterContent from "@/components/CenterContent/CenterContent";
import "./globals.css";

const atkinsonHyperligible = Atkinson_Hyperlegible({
  variable: "--font-atkinson-hyperlegible",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Bookstore App",
  description: "Nextjs playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinsonHyperligible.variable} antialiased`}
      >
        <Header />

        <main>
          <CenterContent>
            {children}
          </CenterContent>
        </main>

        <footer>
        </footer>
      </body>
    </html>
  );
}
