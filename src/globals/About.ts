import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  fields: [
    { name: 'kicker', type: 'text', localized: true, defaultValue: '05 / About' },
    {
      name: 'headlineParts',
      type: 'array',
      minRows: 1,
      localized: true,
      fields: [
        { name: 'text', type: 'text', required: true },
        {
          name: 'accent',
          type: 'select',
          defaultValue: 'none',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Warm', value: 'warm' },
            { label: 'Blue', value: 'blue' },
          ],
        },
        { name: 'breakAfter', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'tagline',
      type: 'textarea',
      localized: true,
      admin: { description: 'Short paragraph under headline' },
    },
    {
      name: 'paragraphs',
      type: 'array',
      minRows: 1,
      localized: true,
      admin: { description: 'Long-form prose. Use {warm:text} or {blue:text} inline for accents.' },
      fields: [{ name: 'content', type: 'textarea', required: true }],
    },
    {
      name: 'currently',
      type: 'array',
      minRows: 1,
      localized: true,
      fields: [
        { name: 'key', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'toolkit',
      type: 'array',
      minRows: 1,
      localized: true,
      fields: [
        { name: 'key', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
  ],
}
