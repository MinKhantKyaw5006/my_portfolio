import { defineType } from 'sanity'

export default defineType({
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
