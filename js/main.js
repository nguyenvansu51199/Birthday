import { registerLightbox } from "./lightbox.js";

function main() {
  registerLightbox({
    modalId: "lightbox",
    imageSelector: 'img[data-id="lightboxImg"]',
    prevSelector: 'button[data-id="lightboxPrev"]',
    nextSelector: 'button[data-id="lightboxNext"]',
  });
}
main();
