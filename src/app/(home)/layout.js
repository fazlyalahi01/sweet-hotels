import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import dbConnect from "@/database/dbConnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "Find perfect hotels for your stay",
};

export default async function RootLayout({ children }) {

  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar displayNavItems={true}/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
