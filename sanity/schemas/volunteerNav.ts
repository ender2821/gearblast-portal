import { defineField, defineType } from "sanity";

export const volunteerNav = defineType({
  name: "volunteerNav",
  title: "Volunteer Nav",
  type: "document",
  fields: [
    defineField({
      name: "volunteerNavItems",
      title: "Volunteer Nav Items",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          name: "volunteerNavItem",
          title: "Volunteer Nav Item",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Page Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              validation: (rule) => rule.required(),
              options: {
                source: "title",
                maxLength: 200,
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
              },
            }),
          ],
        },
      ],
    }),
  ],
});
