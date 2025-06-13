import React from 'react';
import './Principal.css';

const Principal = () => {
  return (
    <div className="principal-section">
      <div className="principal-header">
        <h1>Message from the Principal</h1>
      </div>

      <div className="principal-content">
        <img src="/principal.png" alt="Principal" className="principal-image" />
        <div className="message-section">
          <p>
            The Principal of Shetkari Unnati Mandal’s <strong>Smt. Chadrabai Anant Patil English Medium High School and Junior College, Kalher</strong> is Ms. Nilam Patil (B.A., M.A., D.Ed, B.Ed), an excellent example of mild nature and dedicated leadership.
          </p>
          <p>
            Education is the most important tool for economic change. Our institution was established with a vision to provide education to the first-generation learners of rural society and to promote all-round development through participation in curricular, co-curricular, and extracurricular activities.
          </p>
          <p>
            One of our key goals is to instill respect for human values among students while helping them build self-confidence.
          </p>
          <p>
            The synergy of our proactive team reflects high skill, unwavering quality, and a rich educational experience. Our holistic approach aims to prepare students physically, mentally, socially, spiritually, and environmentally to face global challenges with confidence.
          </p>
          <p>
            We believe that parents play a vital role in the complete development of students. Hence, we maintain regular communication to keep them updated on their ward’s progress.
          </p>

          <div className="principal-name-title">
            <h4>Ms. Nilam Patil</h4>
            <h5>Principal</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
