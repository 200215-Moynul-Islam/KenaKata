import Link from 'next/link';
import { navItems } from './nav-config';

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => {
        const IconComponent = item.Icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            className="p-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all duration-200"
          >
            <IconComponent className="w-5 h-5" strokeWidth={1.5} />
            <span className="sr-only">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
