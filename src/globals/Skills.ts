import type { GlobalConfig } from 'payload'

export const Skills: GlobalConfig = {
  slug: 'skills',
  access: { read: () => true },
  fields: [
    {
      name: 'groups',
      type: 'array',
      minRows: 1,
      localized: true,
      admin: {
        description:
          'Skill groups rendered in a 2-column grid. Use titleEm for the italic amber portion of the heading.',
      },
      fields: [
        { name: 'titlePre', type: 'text', required: true },
        {
          name: 'titleEm',
          type: 'text',
          admin: { description: 'Italic amber word, e.g. "UI" in "Frameworks & UI"' },
        },
        { name: 'titlePost', type: 'text' },
        {
          name: 'chips',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'name', type: 'text', required: true },
            {
              name: 'variant',
              type: 'select',
              defaultValue: 'default',
              options: [
                { label: 'Default (outline)', value: 'default' },
                { label: 'Core (filled blue)', value: 'core' },
                { label: 'Learning (dashed amber)', value: 'learning' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
