// import "@picocss/pico/";
import "@/styles/main.scss";
import "./globals.css";
import { Lato } from "next/font/google";

const font_primary = Lato({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "700"],
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
      <body>{children}</body>
    </html>
  );
}
