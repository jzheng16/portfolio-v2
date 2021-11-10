import React from 'react';
import './Footer.scss';

export default () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="responsive_footer">
        <p>&#169; {year} Joey Zheng</p>
        <ul>
          <li>
            <a href="https://www.github.com/jzheng16" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joey-zheng16/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">
              G&G Webstore
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/7712898/jxzheng16" target="_blank" rel="noopener noreferrer">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </footer>

  );
};
