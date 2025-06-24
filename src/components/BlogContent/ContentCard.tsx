import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

// MANDATORY: Define explicit interface with proper types
export interface ContentCardProps {
  id: string | number;
  imageUrl?: string; // Optional image URL
  title: string;
  description: string;
  className?: string;
}

// CRITICAL: Use React.FC with the proper interface
const ContentCard: React.FC<ContentCardProps> = ({
  imageUrl,
  title,
  description,
  className,
}) => {
  return (
    // Wrap with an anchor tag for navigability and apply group class for hover effects
    <a href="#" className="block group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
      <Card
        className={cn(
          "w-full overflow-hidden border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/60",
          className
        )}
      >
        <CardContent className="p-4 flex items-start space-x-4">
          {/* Image Placeholder */}
          <div className="flex-shrink-0 w-24 h-24 bg-secondary rounded-md flex items-center justify-center border">
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-md" />
            ) : (
              <ImageIcon className="w-10 h-10 text-muted-foreground" />
            )}
          </div>
          
          {/* Text Content */}
          <div className="flex-1 py-1">
            <h3 className="text-lg font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default ContentCard;
