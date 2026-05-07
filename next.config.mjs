/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep strict TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
