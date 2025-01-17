'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Ejemplo de cómo agregar tus fotos:
// 1. Coloca tus imágenes en la carpeta public/images/gallery/
// 2. Agrega las rutas aquí
const photos = [
  {
    id: 1,
    src: '/images/gallery/1.webp',
    alt: 'John y Leidy en la playa'
  },
  {
    id: 2,
    src: '/images/gallery/2.webp',
    alt: 'Leidy con un paisaje precioso'
  },
  {
    id: 3,
    src: '/images/gallery/3.webp',
    alt: 'John en la ciudad amurallada de Cartagena'
  },
  {
    id: 4,
    src: '/images/gallery/4.webp',
    alt: 'Leidy y John en la ciudad amurallada de Cartagena'
  },
  {
    id: 5,
    src: '/images/gallery/5.webp',
    alt: 'John y Leidy de espaldas al mar'
  },
  {
    id: 6,
    src: '/images/gallery/6.webp',
    alt: 'John y Leidy viendo lucecitas de Navidad'
  },
  {
    id: 7,
    src: '/images/gallery/7.webp',
    alt: 'John en Cartagena, Colombia'
  },
  {
    id: 8,
    src: '/images/gallery/8.webp',
    alt: 'John y Leidy son una pareja feliz'
  },
  {
    id: 9,
    src: '/images/gallery/9.webp',
    alt: '😊😍❤️'
  },
  {
    id: 10,
    src: '/images/gallery/10.webp',
    alt: 'John y Leidy simplemente se aman ❤️'
  }
];

export default function PhotoGallery() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-spring-pink/5 to-spring-lavender/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-serif">Nuestros Momentos</h2>
        
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                // Desactivamos la optimización automática para permitir cualquier formato
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="text-center">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}