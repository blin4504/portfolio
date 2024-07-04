import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Brian Lin",
  description: "Brian's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mono.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen text-color_text text flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
