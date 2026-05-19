import CategoryCard from './category-card';

type CategoryGridProps = {
  categories: {
    id: number;
    name: string;
    image: string;
    slug: string;
  }[];
};

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
