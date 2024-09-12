import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gearblast Portal",
  description: "Gearblast Attendee Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
