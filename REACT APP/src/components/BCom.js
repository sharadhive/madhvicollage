import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './Ba.css';

const BA = () => {
  return (
    <div className="bcom-page">
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Primary (I to V)
        </motion.h1>
      </Tilt>

      <motion.div 
        className="intro-text" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>
          The academic year starts from June till April
          <br />
          <strong>School timing:</strong> 07.00 AM to 11.50 AM
        </p>
        <p>
          Primary education is the breeding place for the next generation. Each and every child is unique and it is easy for the primary education providers to find the hidden quality. It is real-time to find out the unique quality of the child and to introduce the caring, support, and values of coordination to individual and group goals. Primary education is based on the cognitive development of the child.
        </p>
      </motion.div>
    </div>
  );
};

export default BA;
