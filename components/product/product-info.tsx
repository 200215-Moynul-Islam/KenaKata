type ProductInfoProps = {
  product: any;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="md:sticky md:top-24">
      {/* Category */}
      <p
        className="
          mb-3 text-sm uppercase tracking-widest
          text-primary
        "
      >
        {product.category?.name}
      </p>

      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold">{product.title}</h1>

      {/* Price */}
      <p className="mb-6 text-2xl text-primary">${product.price}</p>

      {/* Description */}
      <p
        className="
          mb-8 leading-7
          text-on-surface-variant
        "
      >
        {product.description}
      </p>

      {/* Add To Cart */}
      <button
        className="
          w-full rounded-xl
          bg-primary px-6 py-3
          font-medium text-on-primary
          transition-opacity
          hover:opacity-90
        "
      >
        Add to Cart
      </button>
    </div>
  );
}
