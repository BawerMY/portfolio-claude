import type { Metadata } from 'next'
import { Newsreader, Geist, Geist_Mono } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'

import '@/styles/tokens.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return {
      title: settings?.pageTitle || 'Bawer Yavuzatmaca — Frontend Developer',
      description: settings?.pageDescription || undefined,
    }
  } catch {
    return { title: 'Bawer Yavuzatmaca — Frontend Developer' }
  }
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
