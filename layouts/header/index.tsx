'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, LogIn } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface/90 backdrop-blur-md transition-colors duration-300">
      {/* We use a 3-column layout on desktop (md:grid) to lock the nav block in the center,
        and fall back to standard flex on mobile layout settings.
      */}
      <div className="mx-auto flex md:grid md:grid-cols-3 h-20 max-w-7xl items-center justify-between px-6">
        {/* Column 1: Left-aligned Branding Logo */}
        <div className="flex justify-start">
          <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
            KenaKata
          </Link>
        </div>

        {/* Column 2: Absolute Centered Navigation (Desktop Only) */}
        <div className="hidden md:flex justify-center">
          <DesktopNav />
        </div>

        {/* Column 3: Right-aligned Actions Control Hub */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <ThemeToggle />

          {/* User Authentication Trigger */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            aria-label={isLoggedIn ? 'Account options' : 'Sign in'}
            title={
              isLoggedIn
                ? 'Dev Mode: Click to simulate sign out'
                : 'Dev Mode: Click to simulate sign in'
            }
            className="p-2 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all focus:outline-none"
          >
            {isLoggedIn ? (
              <User className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <LogIn className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>

          {/* Mobile menu responsive drawer trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
