import type { CollectionConfig } from 'payload'

export const Adventures: CollectionConfig = {
  slug: 'adventures',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'kind', 'season', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'kind',
      type: 'select',
      required: true,
      options: ['Hiking', 'Cycling', 'Urbex', 'Other'],
    },
    { name: 'season', type: 'text', required: true, admin: { description: 'e.g. 2025 season' } },
    { name: 'title', type: 'text', required: true },
    { name: 'order', type: 'number', defaultValue: 0 },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
  ],
}
