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
      // Private Algerian-dates business brief (unlisted path, gated by access code)
      { source: '/dates-c5a69c7e1fa5', destination: '/dates-c5a69c7e1fa5/index.html' },
      // Private Karma Muse hostel availability board demo (unlisted path)
      { source: '/project/karma-acb8b4dd76e9', destination: '/project/karma-acb8b4dd76e9/index.html' },
      // Karma Muse PILOT — live shared board, staff codes via /api/karma (unlisted path)
      { source: '/project/karma-pilot-97a02ab5de80', destination: '/project/karma-pilot-97a02ab5de80/index.html' },
    ]
  },
}

export default nextConfig