import React, { useEffect, useState } from 'react';

interface PullRequest {
  title: string;
  html_url: string;
  merged_at: string | null;
  repository_url: string;
}

const Contributions = () => {
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);

  useEffect(() => {
    const fetchPullRequests = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const headers = token ? { Authorization: `token ${token}` } : {};

      try {
        const searchResponse = await fetch('https://api.github.com/search/issues?q=author:sagarkawad+type:pr+is:merged&per_page=100', { headers });
        const searchData = await searchResponse.json();
        console.log('Fetched PRs authored by sagarkawad:', searchData.items);
        if (!Array.isArray(searchData.items)) {
          throw new Error('Unexpected data structure for pull requests');
        }
        setPullRequests(searchData.items);
      } catch (error) {
        console.error('Error fetching pull requests:', error);
        alert('Failed to fetch pull requests. Please try again later.');
      }
    };

    fetchPullRequests();
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pullRequests.slice(0, 6).map((pr, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{pr.title}</h3>
              <p className="text-gray-600">Repository: {pr.repository_url.split('/').pop()}</p>
              <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
                View Pull Request
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Contributions />
    </ErrorBoundary>
  );
}
