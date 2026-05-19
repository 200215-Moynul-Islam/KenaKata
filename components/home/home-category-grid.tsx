'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import categoryService from '@/api/services/categori.service';
import CategoryGrid from '../shared/category/category-grid';

export default function HomeCategoriesGrid() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getFeatured(4);

        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Categories</h2>

          <Link href="/categories" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>

        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
}
