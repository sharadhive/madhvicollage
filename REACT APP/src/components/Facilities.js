import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Facilities.css';

const facilitiesData = [
  {
    title: "Class Rooms",
    description: "Class rooms are spacious, well ventilated and fully equipped with audio visual devices.",
    imgSrc: "/classroom.jpg",
    link: "#"
  },
  {
    title: "Sports Infra",
    description: "We offer facilities for indoor and outdoor sports, promoting overall student fitness.",
    imgSrc: "/Sports infra.jpg",
    link: "#"
  },
  {
    title: "Computer Labs",
    description: "We have a well-equipped Computer Laboratory with broadband internet connection.",
    imgSrc: "/Computer lab.jpg",
    link: "#"
  },
  {
    title: "Campus Interviews",
    description: "We organize Campus Placement drives to help our students with corporate exposure.",
    imgSrc: "/G8.jpeg",
    link: "#"
  },
  {
    title: "Industrial Visits",
    description: "Students are taken to leading companies for industrial visits, enhancing practical exposure.",
    imgSrc: "/Industrial Visit.jpg",
    link: "#"
  },
  {
    title: "NSS Activities",
    description: "We conduct National Service Scheme (NSS) activities including blood donation camps.",
    imgSrc: "/NSS.jpeg",
    link: "#"
  }
];

const Facilities = () => {
  const groupedFacilities = [];
  for (let i = 0; i < facilitiesData.length; i += 3) {
    groupedFacilities.push(facilitiesData.slice(i, i + 3));
  }

  return (
    <div className="facilities-custom-section">
      <div className="container">
        <h2 className="facilities-custom-title text-center">Infrastructure and Facilities</h2>

        <Carousel indicators={false} interval={5000} controls={true} pause={false} wrap={true}>
          {groupedFacilities.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="facility-slide-wrapper">
                {group.map((facility, idx) => (
                  <div className="card facility-card" key={idx}>
                    <img src={facility.imgSrc} alt={facility.title} className="card-img-top facility-img" />
                    <div className="card-body">
                      <h5 className="card-title">{facility.title}</h5>
                      <p className="card-text">{facility.description}</p>
                      <a href={facility.link} className="btn btn-primary">View Profile</a>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Facilities;
