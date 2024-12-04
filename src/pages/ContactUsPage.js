import React from 'react';
import Contact from '../components/Contact';

const ContactUsPage = () => {
  const contactDetails = {
    address: '123 Main Street, Cityville, USA',
    email: 'Arshpreet@gmail.com',
    phone: '+1 (123) 456-7890',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  };

  return (
    <div>

      <Contact contactDetails={contactDetails} />
    </div>
  );
};

export default ContactUsPage;
