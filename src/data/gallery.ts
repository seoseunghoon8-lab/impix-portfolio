export type GalleryItem = {
  title: string;
  caption: string;
  /** Path to an image in /public, e.g. "/gallery/diagram.png". */
  src: string;
};

// Add real screenshots/diagrams here as your projects produce them.
// Put the image files in public/gallery/ and reference them like "/gallery/name.png".
export const gallery: GalleryItem[] = [];
