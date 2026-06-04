import type { CollectionConfig } from 'payload'

export const Plays: CollectionConfig = {
  slug: 'plays',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'studio', 'status', 'order'],
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'studio', type: 'text', required: true, localized: true },
    {
      name: 'playtime',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. 84h, finished, slow replay' },
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    {
      name: 'coverInitials',
      type: 'text',
      localized: true,
      admin: { description: 'Two-letter abbreviation, e.g. ER for Elden Ring' },
    },
    {
      name: 'status',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: '2025',
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
  ],
}
