/** @type {import('next').NextConfig} */
const isPages = process.env.NEXT_PUBLIC_STATIC_BUILD === 'true';

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  ...(isPages
    ? {
        output: 'export', // produces index.html per route
        trailingSlash: true, // avoids /route  vs /route/ 404s
      }
    : {}),
};
export default nextConfig;
