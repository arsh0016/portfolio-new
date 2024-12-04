import React, { useState, useEffect } from 'react';
import FeaturedProjects from '../components/FeaturedProjects'; 
import portfolioImage from '../assets/images/pro1.PNG';
import ecommerceImage from '../assets/images/pro2.PNG';
import socialMediaImage from '../assets/images/pro3.PNG';

const ProjectsPage = () => {
 
  const [projects] = useState([
    {
      id: 1,
      title: 'THE ARTHOUSE',
      description: 'An immersive website designed to highlight artistic creations and design projects. Built with Vue.js and Tailwind CSS for a sleek, modern look.',
      image: portfolioImage,
      link: '/project/1',
    },    
    {
      id: 2,
      title: 'CAPSTONE PROJECT',
      description: 'On our Capstone website, we showcase the Astronomy Picture of the Day (APOD). In addition to this, we also feature top stories related to astronomy. This allows users to stay updated with the latest developments and discoveries in the field of astronomy, while enjoying stunning space images.',
      image: ecommerceImage,
      link: '/project/2', 
    },
    {
      id: 3,
      title: 'GALLERY',
      description: 'I have created a gallery website where users can view pictures from the last 9 days. It is related to the Astronomy Picture of the Day (APOD), allowing visitors to explore images from the past 10 days of APOD.',
      image: socialMediaImage,
      link: '/project/3',
    },
    {
      id: 4,
      title: 'DESIGNHUB',
      description: 'A dynamic platform for graphic designers to showcase their portfolios and connect with potential clients. Featuring a clean, modern design with intuitive navigation for a seamless user experience.',
      image: require('../assets/images/designhub.jpg'),
      link: '/project/4'
    },
    {
      id: 5,
      title: 'UXFLOW',
      description: 'A UX design project focused on improving the user experience of mobile apps through wireframes and prototypes. Built to facilitate collaboration between designers and developers for smoother workflows.',
      image: require('../assets/images/uxflow.jpg'),
      link: '/project/5'
    },
    {
      id: 6,
      title: 'PIXELCRAFT STUDIO',
      description: 'A graphic design studio showcasing diverse artwork, logo designs, and digital illustrations. Featuring a portfolio-style layout to highlight creativity and graphic design expertise.',
      image: require('../assets/images/pixelcraft.jpg'),
      link: '/project/6'
    }
  ]);
  

  useEffect(() => {
    document.title = 'Projects - My Portfolio';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Explore a diverse range of projects that highlight my skills in development, design, and data-driven applications.');
  }, []);

  return (
    <div className="projects-page container mt-5">
      <FeaturedProjects featuredProjects={projects} />
    </div>
  );
};

export default ProjectsPage;
