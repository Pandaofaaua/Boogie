import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/Boogie/BoogieLogo2.jpeg",
        permanent: true, // Indicates a 301 redirect
      },
    ];
  },
};

export default nextConfig;
