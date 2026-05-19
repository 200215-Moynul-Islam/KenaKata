'use client';

import { useState } from 'react';

export default function ProductDetailsClient({ product }: any) {
  const [activeImage, setActiveImage] = useState(0);

  const images = product?.images?.length ? product.images : ['https://placehold.co/600x600'];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Main Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <div className="aspect-square overflow-hidden rounded-xl bg-surface-container">
            <img
              src={images[activeImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2 mt-4">
            {images.map((img: string, index: number) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-16 h-16 overflow-hidden rounded-md border ${
                  activeImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-primary text-xl mt-2">${product.price}</p>

          <p className="mt-4 text-on-surface-variant">{product.description}</p>

          <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg">Add to Cart</button>
        </div>
      </section>
    </main>
  );
}
