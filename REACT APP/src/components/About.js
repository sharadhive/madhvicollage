import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const fullText = 'Smt. Chandrabai Anant Patil English Medium High School, Kalher';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 about-heading">
            <h1 className="typing-text">{text}</h1>
          </div>
          <div className="col-lg-6 col-md-12 about-details">
            <p>
              <strong>Smt. Chandrabai Anant Patil English Medium High School, Kalher</strong> was founded in July 2018. Since then, it has made significant contributions in the field of education. We are based in Kalher, one of the most cosmopolitan and chosen locations, well connected to Thane and Bhiwandi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;