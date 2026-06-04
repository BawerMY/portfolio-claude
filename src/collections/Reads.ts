import type { CollectionConfig } from 'payload'

export const Reads: CollectionConfig = {
  slug: 'reads',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'author', type: 'text', required: true, localized: true },
    { name: 'order', type: 'number', defaultValue: 0 },
    {
      name: 'coverInitial',
      type: 'text',
      localized: true,
      admin: { description: 'Single letter shown in cover tile. Auto from title if blank.' },
    },
    {
      name: 'status',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: '2025',
      admin: { description: 'e.g. Now, Just finished, Reread, 2025' },
    },
    {
      name: 'statusVariant',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default (mute)', value: 'default' },
        { label: 'Now (blue)', value: 'now' },
        { label: 'Warm (amber)', value: 'warm' },
      ],
    },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
  ],
}
