import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { ThemeProvider } from "./ui/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon Amable",
  description: "WEBSITE MADE WITH LOVE BY SIMON AMABLE",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header/>
          {children}
          <Footer/>
          </ThemeProvider>
        </body>
    </html>
  );
}
