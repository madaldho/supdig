import contentful from "contentful"; // Mengimpor client untuk runtime
import type { EntryFieldTypes } from "contentful"; // Mengimpor hanya tipe

// **Interface untuk tiap tipe konten**
export interface Link {
  contentTypeId: "link";
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    redirectUrl: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    metatitle: EntryFieldTypes.Text;
    metadescription: EntryFieldTypes.Text;
    metakeyword: EntryFieldTypes.Text;
    category?: EntryFieldTypes.Text;
  };
}


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

