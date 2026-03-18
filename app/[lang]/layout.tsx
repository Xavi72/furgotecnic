import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/molecules/header/header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furgotecnic",
  description: "Furgotecnic - Your trusted partner for innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
