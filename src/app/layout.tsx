import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakesh Das",
  description:
    "I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups (SaaS) in the last 5 years, each focusing on easy-to-use and secure tech solutions.",
  openGraph: {
    title: "Rakesh Das",
    description:
      "I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups (SaaS) in the last 5 years, each focusing on easy-to-use and secure tech solutions.",
    url: "https://hextaui-portfolio.vercel.app",
    type: "website",
    images: [
      {
        url: "https://hextaui-portfolio.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@preetsuthar17",
    creator: "@preetsuthar17",
    title: "Preet Suthar",
    description:
      "I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups (SaaS) in the last 5 years, each focusing on easy-to-use and secure tech solutions.",
    images: "https://hextaui-portfolio.vercel.app/twitter-image.png",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Preet Suthar" />
        <meta
          property="og:description"
          content="I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups (SaaS) in the last 5 years, each focusing on easy-to-use and secure tech solutions."
        />
        <meta
          property="og:url"
          content="https://hextaui-portfolio.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hextaui-portfolio.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@preetsuthar17" />
        <meta name="twitter:creator" content="@preetsuthar17" />
        <meta name="twitter:title" content="Preet Suthar" />
        <meta
          name="twitter:description"
          content="I am an Indie Hacker or a SaaS Creator. I've launched over 10 startups (SaaS) in the last 5 years, each focusing on easy-to-use and secure tech solutions."
        />
        <meta
          name="twitter:image"
          content="https://hextaui-portfolio.vercel.app/twitter-image.png"
        />
      </head>
      <body
        className={`${DMSans.variable} font-[family-name:var(--font-dm-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
