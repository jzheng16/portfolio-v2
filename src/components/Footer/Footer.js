import React from 'react';
import './Footer.scss';

export default () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a id="return-to-home" href="#top">
        <i className="far fa-arrow-alt-circle-up"></i>
      </a>
      <ul>
        <li>
          <a href="https://www.github.com/jzheng16" target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-2x">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li>
          <span className="fa-stack fa-2x">
            <a href="https://www.linkedin.com/in/joey-zheng16/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
            </a>
          </span>
        </li>
        <li>
          <span className="fa-stack fa-2x">
            <a href="https://stackoverflow.com/users/7712898/jxzheng16" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-stack-overflow fa-stack-1x fa-inverse"></i>
            </a>
          </span>
        </li>
      </ul>
      <p id="copyright">&#169; {year} Joey Zheng</p>
    </footer>

  );
};
