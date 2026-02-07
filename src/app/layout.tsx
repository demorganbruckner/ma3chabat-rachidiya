import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // Using Tajawal for a modern, legible Arabic look
import "./globals.css";
import { StickyContactButton } from "@/components/ui/StickyContactButton";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "معشبة الراشيدية | Ma3chabat Rachidiya",
  description: "متجر أعشاب طبيعية مغربية أصيلة - صحة، توازن، وطبيعة.",
  icons: {
    icon: '/rachidiya logo.png',
    shortcut: '/rachidiya logo.png',
    apple: '/rachidiya logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} antialiased font-sans bg-stone-50 text-stone-900`}
      >
        {children}
        <StickyContactButton />
      </body>
    </html>
  );
}
