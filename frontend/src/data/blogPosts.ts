import gettingStartedWithReact from '../content/getting-started-with-react.md?raw';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  // {
  //   slug: 'getting-started-with-react',
  //   title: 'Getting Started with React: A Comprehensive Guide',
  //   excerpt: 'Learn the fundamentals of React and start building modern web applications with this comprehensive guide for beginners.',
  //   date: '2024-03-15',
  //   readTime: '8 min read',
  //   tags: ['React', 'Web Development', 'JavaScript'],
  //   coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
  //   content: gettingStartedWithReact,
  // },
];

// Helper function to get a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 