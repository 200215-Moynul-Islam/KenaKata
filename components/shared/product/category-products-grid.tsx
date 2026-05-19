'use client';

import { useEffect, useState } from 'react';

import ProductGrid from './product-grid';
import categoryService from '@/api/services/categori.service';

type CategoryProductsGridProps = {
  slug: string;
};

export default function CategoryProductsGrid({ slug }: CategoryProductsGridProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch categories first
        const categories = await categoryService.getAll();

        // Match current category
        const matchedCategory = categories.find((category: any) => category.slug === slug);

        if (!matchedCategory) {
          return;
        }

        setCategoryName(matchedCategory.name);

        // Fetch products of category
        const categoryProducts = await categoryService.getProducts(matchedCategory.id);

        setProducts(categoryProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [slug]);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-on-surface-variant">Categories / {categoryName}</div>

        {/* Title */}
        <h1 className="mb-8 text-3xl font-bold">{categoryName}</h1>

        {/* Products */}
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
