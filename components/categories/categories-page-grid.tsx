'use client';

import categoryService from '@/api/services/categori.service';
import { useEffect, useState } from 'react';
import CategoryGrid from '../shared/category/category-grid';

export default function CategoriesPageGrid() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAll();

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
        <h1 className="mb-8 text-3xl font-bold">All Categories</h1>

        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
}
