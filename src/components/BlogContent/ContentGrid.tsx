import React from 'react';
import ContentCard, { ContentCardProps } from './ContentCard';

// MANDATORY: Define dummy data directly in the component file
const blogPosts: ContentCardProps[] = [
  {
    id: 1,
    title: 'The Future of Frontend Development in 2024',
    description: 'Exploring the latest trends, frameworks, and tools that are shaping the future of web development. From AI-powered code assistants to the rise of meta-frameworks, we cover it all.'
  },
  {
    id: 2,
    title: 'A Deep Dive into React Server Components',
    description: 'Understand the what, why, and how of React Server Components. This article breaks down the core concepts and provides practical examples for your next Next.js project.'
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS: Tips and Tricks for Production',
    description: 'Go beyond the basics. Learn advanced techniques for creating scalable, maintainable, and highly efficient UIs with Tailwind CSS, including custom plugins and design systems thinking.'
  },
  {
    id: 4,
    title: 'Why TypeScript is a Must-Have for Modern Web Apps',
    description: 'An in-depth look at the benefits of using TypeScript in large-scale applications. We discuss type safety, improved developer experience, and how it helps prevent common bugs.'
  },
  {
    id: 5,
    title: 'Building Accessible Components with Radix UI',
    description: 'Accessibility is not an afterthought. Learn how to leverage Radix UI primitives to build beautiful, functional, and fully accessible components for everyone.'
  },
];

const ContentGrid: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {blogPosts.map((post) => (
        <ContentCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default ContentGrid;
