import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const sora = Sora({ weight: "400", subsets: ["latin"] });

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
      <body className={sora.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
