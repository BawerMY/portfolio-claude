import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true, defaultValue: 'Bawer Yavuzatmaca' },
    { name: 'role', type: 'text', localized: true, defaultValue: 'Frontend Developer' },
    {
      name: 'pageTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Bawer Yavuzatmaca — Frontend Developer',
    },
    { name: 'pageDescription', type: 'textarea', localized: true },
    {
      name: 'footerLeft',
      type: 'text',
      localized: true,
      defaultValue: '© 2026 Bawer Yavuzatmaca',
    },
    {
      name: 'footerRight',
      type: 'text',
      localized: true,
      defaultValue: 'Built with care · Brussels',
    },
  ],
}
