import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Sagar Kawad. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;