import type { Metadata } from "next";
import Header from "@/components/Header";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "경기청년사다리프로그램",
  description: "경기청년사다리, 도전과 성장을 위한 여정!",
  openGraph: {
    type: "website",
    url: "https://gyeonggi-youth-ladder-program.netlify.app/",
    title: "경기청년사다리프로그램",
    description: "경기청년사다리, 도전과 성장을 위한 여정!",
    siteName: "경기청년사다리프로그램",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
  verification: {
    google: "Eg7oOA_tg1teLw7UGExt_Rak-C-Apo4AELjSrxvWQig",
    other: {
      "naver-site-verification": "f5c3111382fb0a939cafbfa33f6b4f3c709b4242",
    },
  },
};

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={noto_sans_kr.className}>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
