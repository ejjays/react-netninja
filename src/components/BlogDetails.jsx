import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import '../App.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);
  
  return (
    <div className="blog-details">
      { loading && <div className="loading">Loading...</div>}
      { error && <div className="error">{error}</div>}
      { blog && <div className="blog">
        <h1>{ blog.title }</h1>
        <p className="body">{ blog.body }</p>
        <p className="author">Author: <span className="ba">{ blog.author }</span></p>
      </div>}
    </div>
  );
};

export default BlogDetails;