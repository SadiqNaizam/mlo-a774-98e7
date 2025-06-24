import React from 'react';
import { Rss, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Articles', href: '#' },
  { label: 'About', href: '#' },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 max-w-7xl items-center justify-between mx-auto px-6">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2" aria-label="Modern Blog home page">
            <Rss className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:block">Modern Blog</span>
          </a>
          <nav className="hidden gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex">Subscribe</Button>
            <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
