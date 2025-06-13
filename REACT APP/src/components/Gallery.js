// collegeapp/src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';

const allGalleryImages = [
  "/G1.jpg", "/G2.jpg", "/G3.jpg", "/G4.jpg",
  "/G5.jpg", "/G6.jpg", "/G7.jpeg", "/G8.jpeg",
  "/G9.jpeg", "/G10.jpeg", "/G11.jpeg", "/G12.jpg",
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const navigate = useNavigate(); // <- For navigation

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleMorePhotosClick = () => {
    navigate('/event'); // Navigate to Event.jsx route
  };

  const displayedImages = allGalleryImages.slice(0, 8);

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>
        <div className="gallery-grid">
          {displayedImages.map((image, index) => (
            <div className="gallery-item" key={index} data-aos="fade-up">
              <img
                src={image}
                alt={`Campus scene ${index + 1}`}
                className="gallery-img"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>

        <button className="explore-more-btn" onClick={handleMorePhotosClick}>
          Explore More Photos
        </button>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Body>
            <img src={selectedImage} alt="Expanded view" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
