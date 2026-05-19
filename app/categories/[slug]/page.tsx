import CategoryProductsGrid from '@/components/shared/product/category-products-grid';

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  return <CategoryProductsGrid slug={slug} />;
}
