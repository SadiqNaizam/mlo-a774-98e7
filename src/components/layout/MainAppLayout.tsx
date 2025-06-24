import React from 'react';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className={cn(
          "mx-auto w-full max-w-7xl p-6 flex flex-col gap-6", 
          className
        )}>
            {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
