import "./Carousel.scss";

export default function Carousel() {

   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   const carouselImages = [
      {
         src: "/images/patio3.JPG",
         alt: "riseup marketplace garden and patio"
      },
      {
         src: "/images/riseup-marketplace-bread-4.JPG",
         alt: "riseup marketplace freshly baked loaves of bread"
      },
      {
         src: "/images/riseup-marketplace-merchandise-2.jpg",
         alt: "riseup marketplace miniature drums and other products for sale"
      },
      {
         src: "/images/riseup-marketplace-pacman-1.jpg",
         alt: "riseup marketplace pacman machine and plants"
      },
      {
         src: "/images/roger-with-ting.JPG",
         alt: "riseup marketplace owner Roger with Ting drink"
      },
      {
         src: "/images/riseup-mug.JPG",
         alt: "riseup marketplace custom coffee mug to-go container"
      },
      {
         src: "/images/riseup-marketplace-patties-4.JPG",
         alt: "riseup marketplace jamaican patties"
      },
      {
         src: "/images/riseup-marketplace-dog-2.JPG",
         alt: "riseup marketplace entrance with local bulldog"
      },
      {
         src: "/images/snickerdoodles-in-case-1.JPG",
         alt: "riseup marketplace freshly baked snickerdoodles in display case"
      }
   ];

   const duplicatedImages = carouselImages.map((image) => {
      const clonedImage = { ...image };
      clonedImage["aria-hidden"] = true;
      return clonedImage;
   });

   const combinedImages = carouselImages.concat(duplicatedImages);

   return (
      <section className="image-carousel">
         <div className={`image-carousel__container ${prefersReducedMotion ? 'image-carousel__container--no-movement' : 'image-carousel__container--movement'}`}>
            {prefersReducedMotion ? (
               carouselImages.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} className="image-carousel__image" />
               ))
            ) : (
               combinedImages.map((image, index) => (
                  <img
                     key={index}
                     src={image.src}
                     alt={image.alt}
                     className="image-carousel__image"
                     aria-hidden={image["aria-hidden"]}
                  />
               ))
            )}
         </div>
      </section>
   )
}
