import HeroCarousel from '@/components/hero-carousel/hero-carousel';
import FeaturedProducts from '@/components/home/featured-products';
import HomeCategoriesGrid from '@/components/home/home-category-grid';

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <FeaturedProducts />
      <HomeCategoriesGrid />
    </main>
  );
}
