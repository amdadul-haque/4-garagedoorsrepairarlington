import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reliable & Affordable Garage Door Repair in Arlington, TX",
  description: "Trust the experts at Garage Door Repair Arlington Texas for all your garage door needs. We offer reliable and affordable local repair services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <Navbar />
        <div className="w-full h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
