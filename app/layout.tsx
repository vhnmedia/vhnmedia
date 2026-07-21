import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VHN Media — Free 3-Week Lead Gen Trial for Local Businesses",
  description:
    "We run Facebook & Instagram lead ads for your business. Every lead gets an AI voice call within 60 seconds that books the appointment straight to your calendar. Free for 3 weeks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display (headings) + Satoshi (body) via Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,600,700&display=swap"
        />
        {/* JetBrains Mono (timer digits, labels, stats) via Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
