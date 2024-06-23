import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import dbConnect from "@/database/dbConnect";
import { siteConfig } from "@/config/site";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default async function RootLayout({ children }) {

  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
