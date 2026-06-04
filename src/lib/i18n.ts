import { cookies } from 'next/headers'

export type Locale = 'en' | 'it'

export const LOCALES: Locale[] = ['en', 'it']
export const LOCALE_COOKIE = 'locale'

export async function getLocale(): Promise<Locale> {
  const store = await cookies()
  const value = store.get(LOCALE_COOKIE)?.value
  return value === 'it' ? 'it' : 'en'
}
