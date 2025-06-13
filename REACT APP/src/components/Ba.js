import React from 'react';
import './Ba.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const BA = () => {
  return (
    <div className="bcom-page">
      <motion.h1 
        className="page-title" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Pre-Primary (Nursery / Jr.Kg. / Sr.Kg.)
      </motion.h1>

      <motion.p 
        className="intro-text" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 1 }}
      >
        The academic year starts from June till April. The academic session of the year starts in June and finishes in April.<br/>
        <strong>School Timing: 08.30 AM to 11:30 AM</strong>
      </motion.p>

      <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} className="tilt-box">
        <motion.div 
          className="year-section" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="section-title">Understanding Pre-Primary Education</h2>
          <p>
            The early years of children, when they come out of their secure zone and join school — their second home — are crucial.
            It should offer comfort, build self-respect, and nurture communication and social skills.
          </p>
        </motion.div>
      </Tilt>

      <div className="semester-container">
        <motion.div className="syllabus-semester" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <h3>Salient Features</h3>
          <ul>
            <li>A good head start for learning</li>
            <li>Play way method of teaching and learning</li>
            <li>Right track of early learning</li>
            <li>Higher development of language and maths skills</li>
            <li>Social skills development</li>
            <li>Cognitive development</li>
          </ul>
        </motion.div>

        <motion.div className="syllabus-semester" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <h3>Basic Facilities</h3>
          <ul>
            <li>Clean and hygienic environment</li>
            <li>Trained soft-speaking teachers</li>
            <li>Semi-skilled helpers</li>
            <li>Colourful classrooms</li>
            <li>Ample toys, bicycles, and games</li>
            <li>Drawing boards</li>
            <li>Playground</li>
            <li>Flashcards for identification</li>
            <li>Close proximity to home</li>
            <li>Clean and filtered drinking water</li>
            <li>Well-maintained toilets</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BA;
