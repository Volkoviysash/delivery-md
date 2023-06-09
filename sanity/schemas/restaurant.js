import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineType({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineType({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineType({
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    }),
    defineType({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant',
    }),
    defineType({
      name: 'long',
      type: 'number',
      title: 'Longtitude of the restaurant',
    }),
    defineType({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    }),
    defineType({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from 1 to 5 stars',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),
    defineType({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineType({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})