import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Liang",
  description: "My Website/Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
