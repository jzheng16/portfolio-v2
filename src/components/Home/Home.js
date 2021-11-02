import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Project';
import Contact from '../Contact/Contact';

const Home = () => (
  <main className="home_main_content">
    <LandingPage />
    <Blog />
    <Projects />
    <Contact />
  </main>

);

export default Home;
