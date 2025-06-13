import React from 'react';
import Hero from './Hero';
import About from './About';
import Facilities from './Facilities';
import Courses from './Courses';
import Gallery from './Gallery';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Facilities />
      <Courses />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
