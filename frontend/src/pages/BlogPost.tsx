import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { FadeInView } from '../components/animations/FadeInView';
import CodeDisplay from '../CodeDisplay';

const dedent = (code: string) => {
  const lines = code.split('\n').filter((line) => line.trim() !== '');
  const minIndent = Math.min(...lines.map((line) => line.match(/^\s*/)?.[0].length || 0));
  return lines.map((line) => line.slice(minIndent)).join('\n');
};

const blogPosts = {
  'getting-started-with-react': {
    title: 'Getting Started with React: A Comprehensive Guide',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['React', 'Web Development', 'JavaScript'],
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    content: [
      {
        type: 'text',
        value: `React has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the core concepts of React and how to get started with building your first application.`,
      },
      {
        type: 'text',
        value: `Why React?

        React's component-based architecture makes it easy to build and maintain large applications.
        Its virtual DOM implementation ensures optimal performance, while the vast ecosystem of libraries
        and tools makes development a breeze.`,
      },
      {
        type: 'text',
        value: `Getting Started

        First, let's create a new React application using Vite:`,
      },
      {
        type: 'code',
        value: `
        npm create vite@latest my-react-app -- --template react-ts
        cd my-react-app
        npm install
        `,
        language: 'bash',
      },
      {
        type: 'text',
        value: `Core Concepts

        1. Components
        2. Props
        3. State
        4. Hooks
        5. Effects

        Stay tuned for more detailed explanations of each concept!`,
      },
      {
        type: 'code',
        value: `
        console.log('hello world');
        console.log('This is a multi-line code example.');
        `,
        language: 'javascript',
      },
    ],
  },
  // Add other blog posts here
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <article className="container mx-auto px-6">
        <FadeInView>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                if (block.type === 'code') {
                  return (
                    <CodeDisplay
                      key={index}
                      code={dedent(block.value)}
                      language={block.language}
                    />
                  );
                }
                if (block.type === 'text') {
                  return block.value.trim().split("\n").map((paragraph, index) => (paragraph.trim() === "" ? <br key={index}/> : <p key={index} className="mb-1">{paragraph}</p>))
                }
                return null;
              })}
            </div>
          </div>
        </FadeInView>
      </article>
    </main>
  );
};

export default BlogPost;
