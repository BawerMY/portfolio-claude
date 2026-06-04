import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: { read: () => true },
  fields: [
    {
      name: 'meta',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      localized: true,
      defaultValue: [
        { label: 'Frontend Developer' },
        { label: 'Brussels, BE' },
        { label: 'Available for work', live: true },
      ],
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'live',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Show pulsing green dot' },
        },
      ],
    },
    {
      name: 'titleParts',
      type: 'array',
      minRows: 1,
      localized: true,
      admin: {
        description:
          'Title segments. Use accent=warm for amber italic, accent=blue for steel-blue italic.',
      },
      fields: [
        { name: 'text', type: 'text', required: true },
        {
          name: 'accent',
          type: 'select',
          defaultValue: 'none',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Warm (amber italic)', value: 'warm' },
            { label: 'Blue (steel italic)', value: 'blue' },
          ],
        },
        {
          name: 'breakAfter',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Line break after this segment' },
        },
      ],
    },
    { name: 'subhead', type: 'textarea', localized: true },
    {
      name: 'primaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true, defaultValue: 'See projects' },
        { name: 'href', type: 'text', defaultValue: '#projects' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true, defaultValue: 'About me' },
        { name: 'href', type: 'text', defaultValue: '#about' },
      ],
    },
  ],
}
