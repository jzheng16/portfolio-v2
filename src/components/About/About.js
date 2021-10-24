import React from 'react';
import './About.scss';
import reactLogo from '../../images/react.svg';
import NodeJSLogo from '../../images/Node.js_logo.svg';
import sassLogo from '../../images/sass.png';
import webpackLogo from '../../images/webpack.png';
import HTML5 from '../../images/html5.png';

export default () => (
  <section id="about" className="about">
    <div
      className="about-title"
    // data-aos="fade-right"
    // data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    >
      About
    </div>

    <div className="about-body">

      <div className="intro column-1">

        <p>Based in NYC</p>
        <p>Developer at RIA In A Box</p>
        <p>Maintainer of  <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">G&G Webstore</a></p>
        <p>Freelance Tutor</p>
      </div>

      {/* <div className="stack">
        <div className="stack-title">
          The tools that I am currently working with to build my applications consist of:
        </div>
        <div className="about-stack column-2">
          <div
            className="about-item flex"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="750"
          >
            <img src={reactLogo} className="react-logo" alt="React Logo" />
            React/Redux
          </div>
          <div
            className="about-item flex"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="750"
          >
            <img src={NodeJSLogo} className="logo" alt="Node Logo" height="70px" />
            NodeJS
          </div>
          <div
            className="about-item flex"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            <i className="fas fa-database"></i>
            Postgres
          </div>

          <div
            className="about-item flex"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="750"
          >
            <img src={sassLogo} className="png-logo" alt="Sass Logo" />
            Sass
          </div>
          <div
            className="about-item flex"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="750"
          >
            <img src={webpackLogo} className="png-logo" alt="Webpack Logo" />
            Webpack
          </div>
          <div
            className="about-item flex"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            <img src={HTML5} className="png-logo" alt="HTML5 Logo" />
            HTML5
          </div>
        </div> */}

      {/* </div> */}
    </div>

  </section>
);
