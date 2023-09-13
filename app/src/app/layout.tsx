import './globals.css'
import type { Metadata } from 'next'
import { Inter, Almendra } from 'next/font/google'
import Script from 'next/script'
import Providers from './providers'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tavola Redonda',
  description: 'TBD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>{children}</Providers>
      </body>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
    </html>
  )
}
