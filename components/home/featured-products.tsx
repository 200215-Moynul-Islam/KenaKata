'use client';

import productService from '@/api/services/products.services';
import { useEffect, useState } from 'react';
import ProductCard from '../product/product-card';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await productService.getFeatured();

        setProducts(res.data);
      } catch (err) {
        setError('Failed to load featured products');
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <h2 className="mb-6 text-xl font-semibold text-on-surface">Featured Products</h2>

        {/* ERROR */}
        {error && <p className="text-red-500">{error}</p>}

        {/* LOADING */}
        {loading && <p className="text-on-surface-variant">Loading...</p>}

        {/* EMPTY */}
        {!loading && !error && products.length === 0 && (
          <p className="text-on-surface-variant">No featured products found</p>
        )}

        {/* GRID */}
        {!loading && !error && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
