import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactDetails = {
    address: '123 Main St, Springfield',
    city: 'Springfield',
    state: 'Illinois',
    postalCode: '62701',
    email: 'contact@example.com',
    phone: '123-456-7890',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 section-heading ">Contact Me</h1>
        <p className="lead text-white">
          I'd love to hear from you! Fill out the form below or connect with me on social media.
        </p>
        <hr className="my-4" />
      </div>

      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-12 col-md-6">
          <form onSubmit={submitForm} className="bg-custom shadow-lg rounded-lg p-4 back">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-gradient btn-block">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="contact-details bg-custom shadow-lg rounded-lg p-4">
            <h5 className="text-white">Location</h5>
            <p>
              <strong>Address:</strong> {contactDetails.address}
            </p>
            <p>
              <strong>City:</strong> {contactDetails.city}
            </p>
            <p>
              <strong>State/Province:</strong> {contactDetails.state}
            </p>
            <p>
              <strong>Postal Code:</strong> {contactDetails.postalCode}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactDetails.email}`} className="text-light">
                {contactDetails.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:+${contactDetails.phone}`} className="text-light">
                {contactDetails.phone}
              </a>
            </p>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
