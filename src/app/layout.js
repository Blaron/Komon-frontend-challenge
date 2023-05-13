import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "./../../public/favicon.ico";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "../components/Header-comp";
import Footer from "../components/Footer-comp";

import { ConnectionProvider } from "./context/ConnectionContext";

export const metadata = {
  title: "Komon - challenge",
  description: "Komon challenge artist music fan",
  icons: {
    icon: { favicon },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={(inter.className, "bg-white dark:bg-white dark:text-black")}
      >
        <Header />
        <ConnectionProvider>{children}</ConnectionProvider>
        <Footer />
      </body>
    </html>
  );
}
