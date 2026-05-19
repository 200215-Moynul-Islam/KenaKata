type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    images: string[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      <h3 className="mt-2 text-sm font-medium">{product.title}</h3>

      <p className="text-primary">${product.price}</p>
    </div>
  );
}
