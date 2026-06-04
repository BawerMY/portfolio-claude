import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true, defaultValue: 'Bawer Yavuzatmaca' },
    { name: 'role', type: 'text', defaultValue: 'Frontend Developer' },
    { name: 'pageTitle', type: 'text', defaultValue: 'Bawer Yavuzatmaca — Frontend Developer' },
    { name: 'pageDescription', type: 'textarea' },
    { name: 'footerLeft', type: 'text', defaultValue: '© 2026 Bawer Yavuzatmaca' },
    { name: 'footerRight', type: 'text', defaultValue: 'Built with care · Brussels' },
  ],
}
