import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const coursesData = [
  {
    title: "Bachelor of Arts (BA)",
    description: "For admission to F.Y, B.A., the student should have passed the H.S.C. (Std. XII).",
    path: "/ba"
  },
  {
    title: "Bachelor of Commerce (B.Com)",
    description: "For admission to F.Y, B.Com., the student should have passed the H.S.C. (Std. XII).",
    path: "/bcom"
  },
  {
    title: "Bachelor of Science (B.Sc.)",
    description: "For admission to F.Y, B.Sc., the student should have passed the H.S.C. (Std. XII) with Science stream.",
    path: "/bsc"
  }
];

const Courses = () => {
  return (
    <div className="courses-section">
      <div className="container">
        <h1 className="section-title">Available Courses</h1>
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={course.path} className="view-details-btn">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
