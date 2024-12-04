import React from 'react';
import { useParams } from 'react-router-dom';
import './detailspage.css';

import pro1Image from '../assets/images/pro1.PNG';
import pro2Image from '../assets/images/pro2.PNG';
import pro3Image from '../assets/images/pro3.PNG';

const ProjectDetailPage = () => {
  const { id } = useParams(); 

  const projects = [
    {
      id: 1,
      title: 'THE ARTHOUSE',
      description: 'An immersive website designed to highlight artistic creations and design projects. Built with Vue.js and Tailwind CSS for a sleek, modern look.',
      image: pro1Image,
    },
    {
      id: 2,
      title: 'CAPSTONE PROJECT',
      description: 'On our Capstone website, we showcase the Astronomy Picture of the Day (APOD). In addition to this, we also feature top stories related to astronomy. This allows users to stay updated with the latest developments and discoveries in the field of astronomy, while enjoying stunning space images.',
      image: pro2Image,
    },
    {
      id: 3,
      title: 'GALLERY',
      description: 'I have created a gallery website where users can view pictures from the last 9 days. It is related to the Astronomy Picture of the Day (APOD), allowing visitors to explore images from the past 10 days of APOD.',
      image: pro3Image,
    },
    {
        id: 4,
        title: 'DESIGNHUB',
        description: 'A dynamic platform for graphic designers to showcase their portfolios and connect with potential clients. Featuring a clean, modern design with intuitive navigation for a seamless user experience.',
        image: require('../assets/images/designhub.jpg'),
        
      },
      {
        id: 5,
        title: 'UXFLOW',
        description: 'A UX design project focused on improving the user experience of mobile apps through wireframes and prototypes. Built to facilitate collaboration between designers and developers for smoother workflows.',
        image: require('../assets/images/uxflow.jpg'),

      },
      {
        id: 6,
        title: 'PIXELCRAFT',
        description: 'A graphic design studio showcasing diverse artwork, logo designs, and digital illustrations. Featuring a portfolio-style layout to highlight creativity and graphic design expertise.',
        image: require('../assets/images/pixelcraft.jpg'),
     
      }
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="project-detail-container">
      {project ? (
        <div className="project-detail-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-detail-image"
          />
          <div className="project-detail-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ) : (
        <p className="project-not-found">Project not found.</p>
      )}
    </div>
  );
};

export default ProjectDetailPage;
