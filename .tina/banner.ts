import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { contentOrderOptions, hAlignOptions } from "./shared/options"

export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is the main headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-5xl mb-0",
        subheadStyles: "text-black text-3xl mb-0",
        textStyles: "text-black text-md mb-0",
        fillStyles: "bg-white",
        textAlignment: "left",
        contentOrder: "labelHeadingsContent",
        width: "normal"
      },
    },
  },
  fields: [
    {
      label: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      label: "Background Image",
      name: "backgroundImage",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Position",
          name: "position",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Bottom", value: "object-bottom" },
            { label: "Center", value: "object-center" },
            { label: "Left", value: "object-left" },
            { label: "Left Bottom", value: "object-left-bottom" },
            { label: "Left Top", value: "object-left-top" },
            { label: "Right", value: "object-right" },
            { label: "Right Bottom", value: "object-right-bottom" },
            { label: "Right Top", value: "object-right-top" },
            { label: "Top", value: "object-top" },
          ],
        },
      ],
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "string",
      ui: {
        component: "markdown",
      },
    },
    buttonsSchema,
    navigationLabelSchema,
    {
      type: "object",
      label: "Section Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Minimum Height",
          name: "minHeight",
          type: "string",
        },
        {
          label: "Text Alignment",
          name: "textAlignment",
          type: "string",
          ui: {
            component: "select",
          },
          options: hAlignOptions,
        },
        {
          label: "Width",
          name: "width",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Normal", value: "normal" },
            { label: "Narrow", value: "narrow" },
          ],
        },
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          type: "string",
          label: "Label Style",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline Style",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead Style",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text Style",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "select",
          },
          options: contentOrderOptions,
        },
      ],
    },
  ],
};
