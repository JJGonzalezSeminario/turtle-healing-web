import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { MedicalBusinessSchema } from '@/components/ui/SchemaMarkup'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://turtle-healing.com'),
  title: {
    default: 'Turtle Healing – Privatpraxis für ganzheitliche Orthopädie in Charlottenburg, Berlin',
    template: '%s | Turtle Healing Berlin',
  },
  description: 'Privatpraxis für Orthopädie, Unfallchirurgie & Integrative Medizin in Charlottenburg, Berlin. Akupunktur, TCM & Energetische Medizin. Dr. Ximena Martínez-Micus.',
  openGraph: {
    locale: 'de_DE',
    type: 'website',
    siteName: 'Turtle Healing Berlin',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <MedicalBusinessSchema />
      </head>
      <body className="bg-sand-50 text-sage-900 antialiased font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer /> {/* <-- Hier landet er */}
      </body>
    </html>
  )
}
