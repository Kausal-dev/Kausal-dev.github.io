import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== This tells Next.js to create static HTML
  images: {
    unoptimized: true, // <=== Required because GitHub Pages cannot optimize images on the fly
  },
};

export default nextConfig;