import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="flex flex-col items-center justify-between p-4">CRUD CON NEXTJ Y NESTJS</h1>
        <main className="flex flex-col items-center justify-between p-18">
          {children}
        </main>
      </body>
    </html>
  );
}