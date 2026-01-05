import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import '../App.css';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function Home() {
  const { data: blogPosts, setData: setBlogPosts, loading, error } = useFetch('http://localhost:8000/blogs');
  
  const handleDelete = (id) => {
    const newBlog = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlog);
  };
  
  return(
    <div className="home">
      { error && <div className="error">Something went wrong. Please refresh the page.</div>}
     { loading && <div className="loading">Loading...</div> }
     { blogPosts && <BlogList posts={blogPosts} handleDelete={handleDelete} /> }
    </div>
  );
}

export default Home;