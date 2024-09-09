import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./ui/Header";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon Amable",
  description: "WEBSITE MADE WITH LOVE BY SIMON AMABLE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
