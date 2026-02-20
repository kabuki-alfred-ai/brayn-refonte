import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BRAYN - Conseil Strategique en IA',
  description: 'Cabinet de conseil strategique specialise dans l\'IA Generative. Transformez votre entreprise avec BRAYN.',
  keywords: 'IA, intelligence artificielle, conseil, strategie, transformation digitale, IA generative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased neural-bg`}>
        {children}
      </body>
    </html>
  )
}
