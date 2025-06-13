import React from 'react';
import './Event.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

const sections = [
  {
    title: "Yoga Day",
    images: ["/G1.jpg", "/G2.jpg", "/G3.jpg"]
  },
  {
    title: "Independence Day",
    images: ["/G4.jpg", "/G5.jpg", "/G6.jpg"]
  },
  {
    title: "Maharashtra Day",
    images: ["/G7.jpeg", "/G8.jpeg"]
  },
  {
    title: "Science Day",
    images: ["/G9.jpeg", "/G10.jpeg"]
  },
  {
    title: "Navratri", 
    images: ["/G11.jpeg", "/G12.jpeg"]
  },
  {
    title: "Annual Day",
    images: ["/G13.jpeg", "/G14.jpeg"]
  },
  {
    title: "Miscellaneous",
    images: ["/G15.jpeg", "/G16.jpeg", "/G17.jpeg", "/G18.jpeg", "/G19.jpeg", "/G20.jpeg", "/G21.jpeg", "/G22.jpeg", "/G23.jpeg", "/G24.jpeg", "/G25.jpeg"]
  }
];

const Event = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="event-page">
      <header className="event-header" data-aos="fade-down">
        <h1>Upcoming Events</h1>
        <img src="/events.jpg" alt="Full Width" className="full-width-img" />
        <p>
          Join us for our vibrant and enriching upcoming events. 
          Experience the spirit of our college through activities, workshops, and celebrations. 
          Scroll through our gallery to relive some of our best memories!
        </p>
      </header>

      <section className="event-highlight" data-aos="fade-up">
        <div className="highlight-card" data-aos="zoom-in-up">
          <h2>Annual Cultural Fest</h2>
          <p>Get ready for a fusion of talent, culture, and excitement. Our annual cultural fest is just around the corner!</p>
        </div>
        <div className="highlight-card" data-aos="zoom-in-up" data-aos-delay="200">
          <h2>Tech Symposium</h2>
          <p>Showcase your coding prowess, attend workshops, and network with industry professionals at our tech event.</p>
        </div>
        <div className="highlight-card" data-aos="zoom-in-up" data-aos-delay="400">
          <h2>Alumni Meet</h2>
          <p>Reconnect, reminisce, and relive old memories with fellow alumni. A perfect blend of nostalgia and networking!</p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section className="event-gallery" data-aos="fade-up" key={i}>
          <h2 className="gallery-title">{section.title}</h2>
          <div className="gallery-3d-grid">
            {section.images.map((img, idx) => (
              <Tilt key={idx} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
                <div className="gallery-card" data-aos="zoom-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="gallery-image-wrapper">
                    <img src={img} alt={`${section.title} ${idx + 1}`} className="gallery-image" />
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Event;

