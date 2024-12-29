import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = ({ testimonials = [] }) => {
  console.log(testimonials);

  return (
    <div className="testimonials-section">
      <h2 className="section-heading text-white">What Our Clients Say</h2>
      <div className="testimonials-container">
        {/* Render Testimonials Dynamically */}
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial-card">
              <div className="author-info">
                <p className="author-name">{testimonial.author}</p>
                <img
                  src={testimonial.avatar || 'https://via.placeholder.com/50'}
                  alt="Author Avatar"
                  className="avatar"
                />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))
        ) : (
          <p className="no-testimonials">No testimonials available.</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection;
