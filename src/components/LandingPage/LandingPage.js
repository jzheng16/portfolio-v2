import React from 'react';
import './LandingPage.scss';

export default () => (
  <section id="home" className="section home">
    <div className="main-content home-main-content">
      <div className="portrait"></div>
      <h2>Hi, I&apos;m Joey</h2>
      <h3>I am a software engineer currently working at <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">RIA In a Box</a></h3>
      <div className="about-description">
        <p>
          <span>I also maintain </span>
          <a href="https://gandgwebstore.com" target="_blank" rel="noopener noreferrer">G&G Webstore</a>
          <span> and freelance tutor in my spare time.</span>
        </p>
      </div>
    </div>
  </section>
);
