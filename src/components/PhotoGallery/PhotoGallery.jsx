import "./PhotoGallery.scss";

export default function PhotoGallery() {
   return (
      <section className="gallery">
         <img src="/images/under-counter.JPG" alt="riseup marketplace entryway" className="gallery__image" />
         <img src="/images/product-wall-coffee-cocoa.JPG" alt="riseup marketplace product wall coffee and cocoa" className="gallery__image" />
         <img src="/images/menu-wall.JPG" alt="riseup marketplace menu board" className="gallery__image" />
         <img src="/images/roger-with-ting.JPG" alt="riseup marketplace owner Roger with Ting drink" className="gallery__image" />
      </section>

   )
}