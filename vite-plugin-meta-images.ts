import type { Plugin } from "vite";

export function metaImagesPlugin(): Plugin {
  return {
    name: "meta-images-plugin",
    transformIndexHtml(html) {
      return html;
    },
  };
}
