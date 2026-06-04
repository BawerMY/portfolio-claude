import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'period', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'role', type: 'text', required: true },
    { name: 'company', type: 'text', required: true },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 2024 — Present, 2022 — 2024' },
    },
    {
      name: 'location',
      type: 'text',
      admin: { description: 'Optional, e.g. Brussels · Remote' },
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'One- or two-sentence description of the role' },
    },
    {
      name: 'stack',
      type: 'array',
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'past',
      options: [
        { label: 'Current', value: 'current' },
        { label: 'Past', value: 'past' },
      ],
    },
  ],
}
