import productService from '@/api/services/products.services';
import ProductGrid from '@/components/shared/product/product-grid';

export default async function ProductsPage() {
  const products = await productService.getAll();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">All Products</h1>
        <p className="text-on-surface-variant">Explore all available products</p>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}
