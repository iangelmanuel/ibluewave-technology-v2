import { Marquee } from "./marquee"

const marqueeImages = [
  { src: "/assets/images/photo.webp", alt: "Photo 1" },
  { src: "/assets/images/product1.webp", alt: "Imagen 1" },
  { src: "/assets/images/product2.webp", alt: "Imagen 2" },
  { src: "/assets/images/product3.webp", alt: "Imagen 3" },
  { src: "/assets/images/product4.webp", alt: "Imagen 4" },
  { src: "/assets/images/product5.webp", alt: "Imagen 5" },
  { src: "/assets/images/product6.webp", alt: "Imagen 6" }
]

const ImageCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-40 w-60 transform overflow-hidden transition-all hover:scale-105 hover:cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-md object-cover shadow-lg transition-transform duration-300"
      />
    </div>
  )
}

export function MarqueeDemoVertical() {
  return (
    <div className="slide-in-right relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:60s]"
      >
        {marqueeImages.map((image) => (
          <ImageCard
            key={image.alt}
            {...image}
          />
        ))}
      </Marquee>

      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:60s]"
      >
        {marqueeImages.map((image) => (
          <ImageCard
            key={image.alt}
            {...image}
          />
        ))}
      </Marquee>
    </div>
  )
}
