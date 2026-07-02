/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      // Unlisted reservations console (static page in public/)
      { source: '/booking', destination: '/booking/index.html' },
    ]
  },
}

export default nextConfig