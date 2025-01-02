import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100"
})

export const metadata: Metadata = {
  title: "Personal Trainer Website Template | Boost Your Fitness Brand",
  description:
    "Professional, modern website templates designed for personal trainers. Showcase your expertise, attract more clients, and grow your fitness business effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
        ${openSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
