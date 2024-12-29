import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './FeaturedProjects.css';

const FeaturedProjects = ({ featuredProjects, heading = "Projects" }) => {
  return (
    <div className="container">
      <h2 className="section-heading text-white">{heading}</h2>
      <div className="row">
        {featuredProjects.map((project) => (
          <div className="col" key={project.id}>
            <div className="project-card">
              <div className="image-container">
                <img 
                  src={project.image} 
                  className="card-img-top text-white" 
                  alt={project.title} 
                />
                <div className="overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {/* Use Link to navigate to the project detail page */}
                  <Link to={`/projects/${project.id}`} className="btn-gradient">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
