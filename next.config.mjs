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
      // Private ops dashboard (unlisted path, gated by access code)
      { source: '/ops-6831ad7fe284', destination: '/ops-6831ad7fe284/index.html' },
    ]
  },
}

export default nextConfig