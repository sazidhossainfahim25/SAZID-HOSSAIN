import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import { Providers } from "@/components/ThemeProvider";
import { ScrollProvider } from "@/components/ScrollContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sazid hossain",
  description: "My personal developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="">
        <Providers>
          <ScrollProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto p-4">{children}</main>
          </ScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
