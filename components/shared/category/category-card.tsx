import Link from 'next/link';

type CategoryCardProps = {
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-xl bg-surface-container">
        <img
          src={category.image}
          alt={category.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      <p
        className="
          mt-2 text-center text-sm font-medium
          transition-colors
          group-hover:text-primary
        "
      >
        {category.name}
      </p>
    </Link>
  );
}
