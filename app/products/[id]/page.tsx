import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/components/product/product-details-client';
import productService from '@/api/services/products.services';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = await productService.getById(Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
