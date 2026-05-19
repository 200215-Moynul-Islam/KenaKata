'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl bg-surface-container">
        <img src={activeImage} alt={title} className="aspect-[4/5] h-full w-full object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3">
        {images?.map((image: string) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`
              overflow-hidden rounded-lg border
              ${activeImage === image ? 'border-primary' : 'border-transparent'}
            `}
          >
            <img src={image} alt={title} className="h-20 w-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
