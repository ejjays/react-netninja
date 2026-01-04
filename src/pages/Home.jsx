import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import '../App.css';
import { useState } from 'react';

function Home() {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Getting Started with React",
      body: "React makes it painless to create interactive UIs. Learn the basics of components and state.",
      author: "Jane Doe",
      id: 1
    },
    {
      title: "Understanding JavaScript Closures",
      body: "Closures allow functions to access variables from an enclosing scope, even after that scope has closed.",
      author: "John Smith",
      id: 2
    },
    {
      title: "CSS Grid vs Flexbox",
      body: "Both CSS Grid and Flexbox are powerful layout systems. Here’s when to use each one.",
      author: "Emily Johnson",
      id: 3
    },
    {
      title: "Async/Await in Modern JavaScript",
      body: "Async/await syntax makes working with promises easier to read and write.",
      author: "Michael Brown",
      id: 4
    }, 
    {
    title: "Introduction to React Hooks",
    body: "React Hooks like useState and useEffect simplify state management and side effects in functional components.",
    author: "Sarah Lee",
    id: 5
  }
]);
  
  const handleDelete = (id) => {
    const newBlog = blogPosts.filter((blog) => blog.id !== id);
    setBlogPosts(newBlog);
  }
  
  return(
    <div className="home">
      <BlogList posts={blogPosts} handleDelete={handleDelete} />
      <h2 style={{
        margin: '20px 0'        
      }}>Filter</h2>
      <BlogList posts={blogPosts.filter((blog) => blog.author !== 'Sarah Lee')} />
    </div>
  );
}

export default Home;