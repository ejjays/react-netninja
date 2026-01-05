import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import '../App.css';
import { useState, useEffect } from 'react';

function Home() {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleDelete = (id) => {
    const newBlog = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlog);
  };
  
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error', err)
      })
  }, []);
  
  return(
    <div className="home">
     { isLoading && <div className="loading">Loading...</div> }
     { blogPosts && <BlogList posts={blogPosts} handleDelete={handleDelete} /> }
    </div>
  );
}

export default Home;