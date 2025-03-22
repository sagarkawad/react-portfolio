import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { FadeInView } from '../components/animations/FadeInView';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  useEffect(() => {
    // Only scroll to top if the navigation is not from browser back/forward buttons
    const isBrowserNavigation = window.history.state?.usr?.fromBrowserNavigation;
    if (!isBrowserNavigation) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.back();
  };

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
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-600 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>

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
              <ReactMarkdown
                components={{
                  h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                  h2: ({  ...props }) => <h2 className="text-2xl font-bold mb-3" {...props} />,
                  h3: ({  ...props }) => <h3 className="text-xl font-bold mb-2" {...props} />,
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={solarizedlight}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className ? className : ''} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </FadeInView>
      </article>
    </main>
  );
};

export default BlogPost;
