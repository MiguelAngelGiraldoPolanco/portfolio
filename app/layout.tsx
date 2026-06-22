import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import './globals.css'

// Cambia esta constante si tu dominio de producción cambia: se usa en toda la metadata.
const siteUrl = 'https://miguelgiraldo.dev'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Miguel Angel Giraldo | AI Software Engineer',
    template: '%s | Miguel Angel Giraldo',
  },
  description:
    'Miguel Angel Giraldo is an AI Software Engineer based in Spain, building intelligent systems with craft and intention: robust APIs, vector databases and efficient, privacy-first LLM deployments.',
  applicationName: 'Miguel Angel Giraldo — Portfolio',
  authors: [{ name: 'Miguel Angel Giraldo', url: siteUrl }],
  creator: 'Miguel Angel Giraldo',
  publisher: 'Miguel Angel Giraldo',
  keywords: [
    'Miguel Angel Giraldo',
    'AI Software Engineer',
    'Artificial Intelligence',
    'LLM',
    'Large Language Models',
    'Vector Databases',
    'API Development',
    'Machine Learning',
    'GDPR-compliant AI',
    'Software Engineer Spain',
    'Privacy-first AI',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: 'Miguel Angel Giraldo',
    title: 'Miguel Angel Giraldo | AI Software Engineer',
    description:
      'AI Software Engineer based in Spain, building intelligent systems with craft and intention: robust APIs, vector databases and privacy-first LLM deployments.',
    locale: 'en_US',
    firstName: 'Miguel Angel',
    lastName: 'Giraldo',
    username: 'MiguelAngelGiraldoPolanco',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Angel Giraldo | AI Software Engineer',
    description:
      'AI Software Engineer based in Spain, building intelligent systems with craft and intention.',
  },
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
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon.ico' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/favicon_io-2/site.webmanifest',
}

// Datos estructurados (JSON-LD) para que buscadores y LLMs entiendan quién soy
// y puedan citarme/recomendarme con información fiable.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Miguel Angel Giraldo',
  url: siteUrl,
  jobTitle: 'AI Software Engineer',
  description:
    'AI Software Engineer focused on Artificial Intelligence integration: robust APIs, vector databases and efficient, privacy-first LLM deployments.',
  email: 'mailto:miguelgiraldo1116@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Large Language Models',
    'Vector Databases',
    'API Development',
    'Machine Learning',
    'Software Architecture',
    'GDPR-compliant AI infrastructure',
  ],
  sameAs: [
    'https://www.linkedin.com/in/miguel-angel-giraldo-100472160/',
    'https://github.com/MiguelAngelGiraldoPolanco',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
