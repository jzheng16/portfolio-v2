// Header needs: title, description, duration, published on
import Avatar from '../Avatar';

const BlogInfo = ({ title, description, duration, published_on }) => (
  <section className="blog_section">
    <h1>{title}</h1>
    <p className="description">{description}</p>
    <div className="separator"></div>
    <section className="info">
      <Avatar width="50" height="50" />
      <div className="blog_info">
        <p>Joey Zheng</p>
        <p>Published on {published_on} <span className="dot">•</span> {duration} Min Read</p>
      </div>
    </section>

  </section>
);

export default BlogInfo;
