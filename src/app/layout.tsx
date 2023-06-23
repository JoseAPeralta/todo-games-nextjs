import "./globals.css";
import "@/styles/main.scss";
import { Navbar } from "@/app/components";
import { Lato } from "next/font/google";

const font_primary = Lato({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Todo Games",
  description: "Video games information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font_primary.variable} `}>
      <body>
        <Navbar />
        <main className="container-fluid 2xl:container">{children}</main>
      </body>
    </html>
  );
}
