import { defineType } from 'sanity'

export default defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
})
