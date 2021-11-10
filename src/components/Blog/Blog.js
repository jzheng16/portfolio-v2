import React from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';
import China from '../../images/china.jpg';
import BlogInfo from '../Blogs/BlogInfo';

const Blog = () => (
  <section id="blog" className="blog section">
    <h1 className="section-header">Blogs</h1>
    <div className="blogs_container main-content">
      <article className="article first" data-aos="fade-in" data-aos-delay="100">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="5" />
        </Link>
      </article>
      <article className="article" data-aos="fade-in" data-aos-delay="200">
        <Link to="/blog/how-to-avoid-burnout">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/how-to-avoid-burnout" className="homepage_blog_info_section">
          <BlogInfo title="Work and Burnout" description="Balancing work, fitness, and mental health amidst the pandemic." published_on="11 November 2021" duration="10" />
        </Link>
      </article>
      <article className="article" data-aos="fade-in" data-aos-delay="300">
        <Link to="/blog/tutoring">
          <img src={China} alt="Chinese architecture" />
        </Link>
        <Link to="/blog/tutoring" className="homepage_blog_info_section">
          <BlogInfo title="My Unexpected Role as a Mentor and Tutor" description="How being a coding tutor became a huge turning point in my life and career." published_on="31 October 2021" duration="10" />
        </Link>
      </article>
      <article className="article" data-aos="fade-in" data-aos-delay="400">
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
