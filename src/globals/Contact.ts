import type { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: { read: () => true },
  fields: [
    {
      name: 'headlineParts',
      type: 'array',
      minRows: 1,
      admin: { description: 'Last segment with linkHref becomes the underlined mailto link.' },
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
        { name: 'linkHref', type: 'text', admin: { description: 'If set, this segment renders as a link' } },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
