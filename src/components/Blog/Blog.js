import React from 'react';
import './Blog.scss';
import China from '../../images/china.jpg';
import BlogInfo from '../Blogs/BlogInfo';

const Blog = () => (
  <section id="blog" className="blog section">
    <h1 className="section-header">Blogs</h1>
    <div className="blogs_container main-content">
      <article className="article first">
        <a href="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </a>
        <a href="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </a>
      </article>
      <article className="article">
        <a href="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </a>
        <a href="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </a>
      </article>
      <article className="article">
        <a href="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </a>
        <a href="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </a>
      </article>
      <article className="article">
        <a href="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </a>
        <a href="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </a>
      </article>

    </div>

  </section>
);

export default Blog;
