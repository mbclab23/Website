import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBC Laboratory",
  description: "Official website of MBC Laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="container"> */}
        <Navbar />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
