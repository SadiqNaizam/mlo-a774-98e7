import React from 'react';
import ContentGrid from '../components/BlogContent/ContentGrid';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * IndexPage serves as the main entry point for the blog feed.
 * It utilizes the MainAppLayout to provide a consistent structure with a header,
 * and renders the ContentGrid which displays all the blog posts.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <ContentGrid />
    </MainAppLayout>
  );
};

export default IndexPage;
