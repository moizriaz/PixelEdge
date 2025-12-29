import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import BootstrapClient from "@/components/BootstrapClient";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "PixelEdge - Creative WEB Developer",
  description: "A creative digital agency shaping powerful brands through stunning design, seamless development, and user-first experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} antialiased`}
      >
        <LenisProvider>
          {children}
          <BootstrapClient />
        </LenisProvider>
      </body>
    </html>
  );
}
