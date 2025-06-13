// collegeapp/src/components/Testimonials.js

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonials.css';

const testimonials = [
  {
    quote: "The college has great teachers and amazing infrastructure.",
    author: "Rahul Sharma",
    rating: 4.5
  },
  {
    quote: "A fantastic place to grow academically and personally.",
    author: "Priya Verma",
    rating: 5
  },
  {
    quote: "Helpful staff, supportive environment, highly recommended.",
    author: "Ankit Joshi",
    rating: 4
  },
  {
    quote: "Loved every bit of my college experience here.",
    author: "Sneha Patil",
    rating: 5
  },
  {
    quote: "Great faculty and lots of real-world exposure.",
    author: "Vivek Kulkarni",
    rating: 4.5
  },
  {
    quote: "Amazing events, nice crowd, and clean campus.",
    author: "Aishwarya More",
    rating: 4
  },
  {
    quote: "Very interactive teaching and modern labs.",
    author: "Nikhil Yadav",
    rating: 4.5
  },
  {
    quote: "College life is very enjoyable and productive.",
    author: "Pooja Shah",
    rating: 5
  },
  {
    quote: "One of the best experiences of my academic life.",
    author: "Kunal Singh",
    rating: 4
  },
  {
    quote: "Lots of support from faculty and mentors.",
    author: "Megha Jain",
    rating: 4.5
  },
];

// 🔁 Responsive carousel settings
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          What Students Say About <span>Smt. Pushpalata Madhukar Madhavi College of Commerce</span>
        </h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows
          showDots={false}
          itemClass="carousel-item-padding"
        >
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-author">- {t.author}</p>
              <div className="testimonials-rating">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i + 1 <= Math.floor(t.rating)) {
                    return <i key={i} className="fas fa-star"></i>;
                  } else if (t.rating - i >= 0.5) {
                    return <i key={i} className="fas fa-star-half-alt"></i>;
                  } else {
                    return <i key={i} className="far fa-star"></i>;
                  }
                })}
              </div>
            </div>
          ))}
        </Carousel>

        {/* <button className="explore-more-btn">Read More</button> */}
      </div>
    </div>
  );
};

export default Testimonials;
