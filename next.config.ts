import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ygor-hslima-portfolio-v3.0', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
