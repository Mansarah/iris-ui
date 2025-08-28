/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;