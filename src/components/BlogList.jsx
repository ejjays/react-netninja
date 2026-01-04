import '../App.css';

function BlogList({posts, handleDelete}) {
  return(
    <div className="blog-list">
       {posts.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <p><span className="author">Author: </span><span className="author-name">{blog.author}</span></p>
        <button style={ btnStyles } onClick={() => {
          handleDelete(blog.id)
        }}>Delete</button>
          </div>
        ))}
    </div>
   );
}

const btnStyles = {
  width: '40%',
  fontWeight: '900',
  backgroundColor: 'red',
  border: 'none',
  color: 'white',
  padding: '5px',
  borderRadius: '20px',
  marginTop: '5px'
};

export default BlogList;