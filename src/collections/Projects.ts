import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'status', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'year', type: 'text', required: true },
    { name: 'order', type: 'number', required: true, defaultValue: 0 },
    {
      name: 'stack',
      type: 'array',
      minRows: 1,
      localized: true,
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    {
      name: 'status',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Personal',
      admin: {
        description: 'Free text label shown next to project. e.g. Live, Personal, Work, Client',
      },
    },
    {
      name: 'preview',
      type: 'group',
      fields: [
        {
          name: 'paletteFrom',
          type: 'text',
          defaultValue: '#1a3a6e',
          admin: { description: 'CSS color, e.g. #1a3a6e' },
        },
        { name: 'paletteTo', type: 'text', defaultValue: '#5a8fd6' },
      ],
    },
    { name: 'href', type: 'text', defaultValue: '#' },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
  ],
}
