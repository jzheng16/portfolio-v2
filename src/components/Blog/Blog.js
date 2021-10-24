import React, { useState, useEffect } from 'react';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:8000/api/posts');
      const posts = await res.json();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <section id="blog" className="blog">

      Blog
      {posts.map(({ title, description, published_at }) => (
        <div className="post-container">
          <p className="descripton">{title}</p>
          <p className="descripton">{description}</p>
          <p className="descripton">{published_at}</p>
        </div>
      ))}

    </section>
  );
};

export default Blog;
