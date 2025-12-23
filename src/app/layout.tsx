import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pruf Boogie | Web3 Engagement & Community Specialist",
  description:
    "Web3 specialist with hands-on experience in community management, onboarding, devnet participation, and ecosystem growth across multiple blockchain networks since 2019.",
  keywords:
    "Web3, crypto, blockchain, community manager, Web3 engagement, devnet, node running, Aptos, Caldera, Zora",
  authors: [{ name: "Pruf Boogie", url: "https://prufboogie.com.ng" }],
  metadataBase: new URL("https://prufboogie.com.ng"),
  openGraph: {
    title: "Pruf Boogie | Web3 Engagement Specialist",
    description:
      "Hands-on Web3 experience across communities, testnets, and blockchain ecosystems. Focused on credible participation, onboarding, and ecosystem growth.",
    url: "https://prufboogie.com.ng",
    siteName: "Pruf Boogie",
    images: [
      {
        url: "/Boogie/BoogieLogo2.jpeg", // replace later if client provides a branded OG image
        width: 1200,
        height: 630,
        alt: "Pruf Boogie Web3 Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@prufboogie", // update if client provides handle
    creator: "@prufboogie",
    title: "Pruf Boogie | Web3 Engagement Specialist",
    description:
      "Web3 engagement specialist with real ecosystem participation, community management, and devnet experience.",
    images: ["/Boogie/BoogieLogo2.jpeg"],
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
        <link rel="icon" href="/Boogie/BoogieLogo2.jpeg" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
