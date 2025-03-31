import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Loseyi | Frontend Developer",
  description:
    "I'm a frontend developer specializing in modern web applications using Next.js, TypeScript, and Tailwind CSS.",
  keywords:
    "frontend developer, Next.js, TypeScript, Tailwind CSS, web development, React",
  authors: [
    { name: "Akomolafe Oluwaseyi", url: "https://loseyiportfolio.vercel.app" },
  ],
  metadataBase: new URL("https://loseyiportfolio.vercel.app"),
  openGraph: {
    title: "Loseyi | Frontend Developer",
    description:
      "I'm a frontend developer specializing in modern web applications using Next.js, TypeScript, and Tailwind CSS.",
    url: "https://loseyiportfolio.vercel.app",
    siteName: "Oluwaseyi Portfolio",
    images: [
      {
        url: "/actualimg.png",
        width: 1200,
        height: 630,
        alt: "Oluwaseyi Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://loseyiportfolio.vercel.app",
    creator: "@Loseyiknows",
    title: "Oluwaseyi | Frontend Developer",
    description:
      "I'm a frontend developer specializing in modern web applications using Next.js, TypeScript, and Tailwind CSS.",
    images: ["/actualimg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/OSEYI.png" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
