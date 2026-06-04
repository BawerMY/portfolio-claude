import type { Metadata } from 'next'
import { Newsreader, Geist, Geist_Mono } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'

import '@/styles/tokens.css'
import { getLocale } from '@/lib/i18n'
import { getDefaults } from '@/lib/defaults'

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
  const locale = await getLocale()
  const fallback = getDefaults(locale).siteSettings
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings', locale })
    return {
      title: settings?.pageTitle || fallback.pageTitle,
      description: settings?.pageDescription || fallback.pageDescription,
    }
  } catch {
    return { title: fallback.pageTitle, description: fallback.pageDescription }
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  return (
    <html
      lang={locale}
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
