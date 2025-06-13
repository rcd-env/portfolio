import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rakesh Das",
  description: "I Build Product not Project",
  openGraph: {
    title: "Rakesh Das",
    description: "I Build Product not Project",
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
    site: "@RakeshDas00001",
    creator: "@RakeshDas00001",
    title: "Rakesh Das",
    description: "I Build Product not Project",
    images: "nada",
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
        {/* The below meta tags can be removed if you rely on Next.js metadata export */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rakesh Das" />
        <meta property="og:description" content="I Build Product not Project" />
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
        <meta name="twitter:site" content="@RakeshDas00001" />
        <meta name="twitter:creator" content="@RakeshDas00001" />
        <meta name="twitter:title" content="Rakesh Das" />
        <meta
          name="twitter:description"
          content="I Build Product not Project"
        />
        <meta
          name="twitter:image"
          content="https://hextaui-portfolio.vercel.app/twitter-image.png"
        />
      </head>
      <body className={`${DMSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
