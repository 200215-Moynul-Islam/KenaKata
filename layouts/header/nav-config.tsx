import { Home, ShoppingBag, ShoppingCart, Grid3X3, LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    Icon: Home,
  },
  {
    label: 'Products',
    href: '/products',
    Icon: ShoppingBag,
  },
  {
    label: 'Categories',
    href: '/categories',
    Icon: Grid3X3,
  },
  {
    label: 'Cart',
    href: '/cart',
    Icon: ShoppingCart,
  },
];
