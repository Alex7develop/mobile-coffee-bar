import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
