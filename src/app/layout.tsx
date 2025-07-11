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
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Rakesh Das Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rcd_env",
    creator: "@rcd_env",
    title: "Rakesh Das",
    description: "I Build Product not Project",
    images: ["/og-image.png"],
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
        {/* Next.js automatically handles metadata from the metadata export above */}
      </head>
      <body className={`${DMSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
