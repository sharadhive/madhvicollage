import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesOffered.css'; // Custom CSS for the course cards

const coursesData = [
  {
    title: "Bachelor of Commerce (B.Com)",
    description: "This course covers financial and accounting skills, helping students gain expertise in commerce and related fields.",
    path: "/bcom"
  },
  {
    title: "Bachelor of Management Studies (BMS)",
    description: "BMS is designed to equip students with the latest management skills to navigate the complexities of business operations.",
    path: "/bms"
  },
  {
    title: "Bachelor of Science in Information Technology (B.Sc IT)",
    description: "This course emphasizes technical skills, teaching programming, database management, and other IT skills.",
    path: "/bsc-it"
  }
];

const CoursesOffered = () => {
  return (
    <div className="courses-section">
      <div className="container">
        <h2 className="courses-section-title">Courses Offered</h2>
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={course.path} className="course-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesOffered;
