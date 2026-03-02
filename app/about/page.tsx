import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Studio217 — AI Automation Agency for Travel',
  description:
    'Learn about Studio217, an NYC-based AI automation agency that builds AI customer service and workflow tools for travel agencies and tour operators. We build what we use ourselves.',
  alternates: {
    canonical: 'https://studio217.ai/about',
  },
  openGraph: {
    title: 'About Studio217 — AI Automation Agency for Travel',
    description:
      'Studio217 is a New York-based AI agency specializing in automation and customer service tools for the travel industry.',
    url: 'https://studio217.ai/about',
    images: [{ url: '/preview-a.png', width: 1200, height: 630, alt: 'Studio217 About' }],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Studio217 do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studio217 is an AI automation agency that designs and deploys AI-powered customer service and workflow automation tools for travel agencies and tour operators. We handle everything from AI chatbot integration to full back-office automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who does Studio217 work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studio217 primarily serves travel agencies, tour operators, and travel tech companies. Our tools are built for teams that handle high volumes of customer inquiries, bookings, and itinerary management.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI tools does Studio217 build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build AI customer service agents, automated booking assistants, itinerary generators, FAQ bots, and back-office workflow automation. All tools are customized for the travel industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Studio217 located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studio217 is based in New York City, NY.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Studio217 different from other AI agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studio217 operates by a simple principle: we build what we use ourselves. Every tool we deploy for clients has been tested and refined in our own operations first. This means our solutions are practical, battle-tested, and built for real-world travel workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Studio217 automate customer service for a travel agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Studio217 specializes in AI customer service automation for travel agencies. We can deploy AI agents that handle common inquiries, follow up on bookings, answer destination questions, and escalate complex cases to human agents — all without disrupting existing workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Studio217 offer AI tools for tour operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tour operators are a core segment we serve. We build AI tools that help operators manage guest communications, automate pre-trip and post-trip messaging, and streamline operations across multiple tours or destinations.',
      },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#fafafa]">
        {/* Nav */}
        <nav className="border-b border-[#e4e4e7] bg-white">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold text-[#0a0a0a] tracking-tight">
              Studio217
            </a>
            <a
              href="mailto:hello@studio217.io"
              className="text-sm font-medium text-[#0057FF] hover:underline"
            >
              Get in touch
            </a>
          </div>
        </nav>

        {/* Hero / About */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#0a0a0a] mb-4 leading-tight">
            About Studio217
          </h1>
          <p className="text-xl text-[#52525b] mb-8 leading-relaxed">
            Studio217 is an AI automation agency based in New York City. We build
            AI-powered customer service and workflow automation tools for travel agencies
            and tour operators.
          </p>
          <p className="text-lg text-[#52525b] mb-6 leading-relaxed">
            Our founding principle is simple:{' '}
            <strong className="text-[#0a0a0a]">we build what we use ourselves.</strong>{' '}
            Every tool we ship has been tested, refined, and proven in real operations
            before it reaches a client.
          </p>
        </section>

        {/* What We Do */}
        <section className="bg-white border-y border-[#e4e4e7]">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'AI Customer Service',
                  desc: 'Deploy AI agents that handle customer inquiries, booking questions, and support requests 24/7 — without losing the human touch.',
                },
                {
                  title: 'Travel Agency Automation',
                  desc: 'Automate repetitive back-office tasks: itinerary generation, follow-up emails, booking confirmations, and more.',
                },
                {
                  title: 'AI Tools for Tour Operators',
                  desc: 'Custom AI tools that help tour operators manage guest communications, pre-trip messaging, and operational workflows at scale.',
                },
                {
                  title: 'Workflow Integration',
                  desc: 'Connect your existing tools — CRMs, booking platforms, email — with AI layers that make everything faster and smarter.',
                },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg border border-[#e4e4e7]">
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#71717a] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">Who We Serve</h2>
          <p className="text-[#52525b] mb-6 leading-relaxed">
            Studio217 primarily works with:
          </p>
          <ul className="space-y-3 text-[#52525b]">
            <li className="flex items-start gap-2">
              <span className="text-[#0057FF] font-bold mt-0.5">→</span>
              <span>
                <strong className="text-[#0a0a0a]">Travel agencies</strong> looking to
                automate customer service and reduce response times with AI
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0057FF] font-bold mt-0.5">→</span>
              <span>
                <strong className="text-[#0a0a0a]">Tour operators</strong> who need to
                manage high volumes of guest communications efficiently
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0057FF] font-bold mt-0.5">→</span>
              <span>
                <strong className="text-[#0a0a0a]">Travel tech companies</strong> that
                want to embed AI capabilities into their existing products
              </span>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white border-y border-[#e4e4e7]">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What does Studio217 do?',
                  a: 'Studio217 is an AI automation agency that designs and deploys AI-powered customer service and workflow automation tools for travel agencies and tour operators. We handle everything from AI chatbot integration to full back-office automation.',
                },
                {
                  q: 'How is Studio217 different from other AI agencies?',
                  a: 'We operate by a simple principle: we build what we use ourselves. Every tool we deploy for clients has been tested and refined in our own operations first. This means our solutions are practical, battle-tested, and built for real-world travel workflows — not just demos.',
                },
                {
                  q: 'Can you automate customer service for a travel agency?',
                  a: 'Yes. We specialize in AI customer service automation for travel agencies. We can deploy AI agents that handle common inquiries, follow up on bookings, answer destination questions, and escalate complex cases to human agents — seamlessly.',
                },
                {
                  q: 'Do you build AI tools for tour operators?',
                  a: 'Yes. Tour operators are a core segment we serve. We build tools that help operators manage guest communications, automate pre-trip and post-trip messaging, and streamline operations across multiple tours or destinations.',
                },
                {
                  q: 'Where is Studio217 based?',
                  a: 'We are based in New York City, NY.',
                },
                {
                  q: 'How do I get started with Studio217?',
                  a: 'Reach out at hello@studio217.io. We will schedule a discovery call to understand your workflows and identify where AI can make the biggest impact.',
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-[#e4e4e7] pb-6 last:border-0">
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">{item.q}</h3>
                  <p className="text-[#71717a] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">
            Ready to automate your travel business with AI?
          </h2>
          <p className="text-[#71717a] mb-6">
            Let&apos;s talk about your workflows and where AI can help.
          </p>
          <a
            href="mailto:hello@studio217.io"
            className="inline-block bg-[#0a0a0a] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0057FF] transition-colors"
          >
            Contact Studio217
          </a>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e4e4e7] bg-white">
          <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
            <span className="text-sm text-[#71717a]">
              © {new Date().getFullYear()} Studio217. New York City, NY.
            </span>
            <a
              href="mailto:hello@studio217.io"
              className="text-sm text-[#71717a] hover:text-[#0a0a0a] transition-colors"
            >
              hello@studio217.io
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
