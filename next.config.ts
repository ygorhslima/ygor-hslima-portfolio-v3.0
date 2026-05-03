import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ygor-hslima-portfolio-v3.0', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
