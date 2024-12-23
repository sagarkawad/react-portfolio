import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FadeInView } from '../components/animations/FadeInView';
import { Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Comprehensive Guide',
    excerpt: 'Learn the fundamentals of React and start building modern web applications with this comprehensive guide for beginners.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['React', 'Web Development', 'JavaScript'],
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
  },
];

const Blog = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-gray-600 text-lg">
              Sharing my thoughts, experiences, and knowledge about web development,
              mobile apps, and everything tech.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInView key={post.slug} delay={index * 0.1}>
              <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.readTime}</span>
                      <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;