// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImg);


function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" 
      href="${original}">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}" />
   </a>
      `;
    })
    .join(" ");
   }


   new SimpleLightbox('.gallery a', {
      captionsData: "alt",
      captionDelay: 250
   });


