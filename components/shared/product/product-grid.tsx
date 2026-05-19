import ProductCard from './product-card';

type ProductGridProps = {
  products: {
    id: number;
    title: string;
    price: number;
    images: string[];
  }[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
