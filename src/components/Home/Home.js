import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Projects from '../Projects/Project';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => (
  <div>
    <Navbar />
    <LandingPage />
    {/* <About /> */}
    <Projects />
    <Contact />
    <Footer />
  </div>

);

export default Home;
