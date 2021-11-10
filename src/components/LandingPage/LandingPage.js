import React from 'react';
import './LandingPage.scss';

export default () => (
  <section id="home" className="section home">
    <div className="main-content home-main-content">
      <div
        className="portrait"
        data-aos="fade-in"
        data-aos-delay="50"
      >
      </div>
      <h2
        data-aos="fade-in"
        data-aos-delay="100"
      >Hi, I&apos;m Joey
      </h2>
      <h3
        data-aos="fade-in"
        data-aos-delay="200"
      >I am a software engineer currently working at <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">RIA In a Box</a>
      </h3>
      <div
        className="about-description"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        <p>
          <span>I also maintain </span>
          <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">G&G Webstore</a>
          <span> and freelance tutor in my spare time.</span>
        </p>
      </div>
    </div>
  </section>
);
