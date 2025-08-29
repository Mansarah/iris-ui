import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig:NextConfig = {
  
pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
     unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ferf1mheo22r9ira.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      
    ],
  },
  reactStrictMode:true,
  eslint: {
        ignoreDuringBuilds: true,
      },
};

export default withMDX(nextConfig);


