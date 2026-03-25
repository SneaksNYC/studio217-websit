import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://studio217.ai'),
  title: {
    default: 'STUDIO217 - AI Automation & Customer Service for Travel',
    template: '%s | STUDIO217',
  },
  description:
    'STUDIO217 is an AI automation agency based in NYC that builds AI-powered customer service tools for travel agencies and tour operators. We build what we use ourselves.',
  keywords: [
    'AI automation agency',
    'AI customer service',
    'travel agency automation',
    'AI tools for travel agents',
    'AI operator tools',
    'travel tech AI',
    'customer service automation',
    'AI chatbot travel',
    'NYC AI agency',
  ],
  authors: [{ name: 'STUDIO217', url: 'https://studio217.ai' }],
  creator: 'STUDIO217',
  publisher: 'STUDIO217',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studio217.ai',
    siteName: 'STUDIO217',
    title: 'STUDIO217 - AI Automation & Customer Service for Travel',
    description:
      'STUDIO217 builds AI-powered automation and customer service tools for travel agencies and tour operators. Based in NYC. We build what we use ourselves.',
    images: [
      {
        url: 'https://studio217.ai/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'STUDIO217 - AI Automation & Customer Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STUDIO217 - AI Automation & Customer Service for Travel',
    description:
      'AI-powered tools for travel agencies and tour operators. Built by practitioners, for practitioners.',
    images: ['/opengraph-image'],
    creator: '@STUDIO217ai',
  },
  alternates: {
    canonical: 'https://studio217.ai',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'STUDIO217',
  url: 'https://studio217.ai',
  logo: 'https://studio217.ai/opengraph-image',
  description:
    'STUDIO217 is an AI automation agency based in New York City that designs and deploys AI-powered customer service and workflow automation tools specifically for travel agencies and tour operators.',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@studio217.ai',
    contactType: 'customer service',
  },
  sameAs: ['https://studio217.ai'],
  knowsAbout: [
    'AI automation',
    'customer service automation',
    'travel agency technology',
    'AI chatbots',
    'workflow automation',
    'tour operator software',
  ],
  slogan: 'We build what we use ourselves.',
}

// Force rebuild - 2026-03-24
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
