import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onClickTargetFilter);

const galleryItemsImg = createGalleryItemsImg(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemsImg);

function createGalleryItemsImg(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onClickTargetFilter(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgTarget = evt.target.dataset.source;
  openBigImg(imgTarget);
}

function openBigImg(item) {
  const instance = basicLightbox.create(`
    <img src="${item}" width="800" height="600">
`);

  instance.show();

  closeEscapeBigImg(instance);
}

function closeEscapeBigImg(item) {
  galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      item.close();
    }
  });
}
