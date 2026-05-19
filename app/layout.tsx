import type { Metadata } from 'next';
import './globals.css';

import AppThemeProvider from '@/context/theme-provider';
import Header from '@/layouts/header';

export const metadata: Metadata = {
  title: 'KenaKata.com',
  description: 'Modern e-commerce storefront',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          <Header />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
