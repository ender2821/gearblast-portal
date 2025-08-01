import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const volunteerPage = defineType({
  name: "volunteerPage",
  title: "Volunteer Page",
  type: "document",
  fields: [
    orderRankField({ type: "volunteerPage", newItemPosition: "before" }),
    defineField({
      name: "name",
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
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "volunteerPageType",
      title: "Volunteer Page Type",
      type: "reference",
      to: [{ type: "volunteerNav" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    }),
    defineField({
      name: "spreadsheetShareLink",
      title: "Spreadsheet Share Link",
      type: "url",
    }),
    defineField({
      name: "spreadsheetEmbedLink",
      title: "Spreadsheet Embed Link",
      type: "url",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        defineField({
          name: "faqItem",
          title: "FAQ Item",
          type: "object",
          fields: [
            defineField({
              name: "faqQuestion",
              title: "FAQ Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "faqAnswer",
              title: "FAQ Answer",
              type: "array",
              of: [{ type: "block" }],
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Image",
          type: "reference",
          to: [{ type: "imageAssets" }],
        }),
      ],
    }),
    defineField({
      name: "files",
      title: "Files",
      type: "array",
      of: [
        defineField({
          name: "pageFile",
          title: "File",
          type: "reference",
          to: [{ type: "fileAssets" }],
        }),
      ],
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        defineField({
          name: "video",
          title: "Video",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Video Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "videoLink",
              title: "Video Link",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
