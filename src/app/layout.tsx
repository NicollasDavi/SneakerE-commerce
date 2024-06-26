import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SneakStreet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  

  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
      </head>
      <body className={inter.className}>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
