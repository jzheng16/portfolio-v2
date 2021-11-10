import React from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';
import China from '../../images/china.jpg';
import BlogInfo from '../Blogs/BlogInfo';

const Blog = () => (
  <section id="blog" className="blog section">
    <h1 className="section-header">Blogs</h1>
    <div className="blogs_container main-content">
      <article className="article first">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </Link>
      </article>
      <article className="article">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </Link>
      </article>
      <article className="article">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </Link>
      </article>
      <article className="article">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </Link>
      </article>

    </div>

  </section>
);

export default Blog;
