import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
      : undefined,
  title: "ون سكند | تجارب حول المملكة",
  description:
    "اكتشف تجارب محلية لمجموعات صغيرة، بقيادة أشخاص يعرفون المكان ويمنحونه روحه.",
  openGraph: {
    title: "ون سكند | تجارب حول المملكة",
    siteName: "ون سكند",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ون سكند | تجارب حول المملكة",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
