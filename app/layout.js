import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Brian Lin",
  description: "Brian's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mono.className}>
      <body className="text-color_text text">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
