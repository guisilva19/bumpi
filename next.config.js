/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'store.storeimages.cdn-apple.com'],
  },
}

module.exports = nextConfig
