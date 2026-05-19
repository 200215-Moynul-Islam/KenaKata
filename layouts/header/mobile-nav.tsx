'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navItems } from './nav-config';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center">
      {/* Menu Hamburger/Close Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6" strokeWidth={1.5} />
        ) : (
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        )}
      </button>

      {/* Slide/Fade Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/60 p-6 shadow-xl z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const IconComponent = item.Icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition"
                >
                  <IconComponent className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-medium text-base">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
