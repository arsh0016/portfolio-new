import React from 'react';
import './FeaturedProjects.css'; 

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className="container">
      <h2 className="section-heading"> Projects</h2>
      <div className="row">
        {featuredProjects.map((project) => (
          <div className="col" key={project.id}>
            <div className="project-card">
              <div className="image-container">
                <img src={project.image} className="card-img-top text-white" alt={project.title} />
                <div className="overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link} className="btn-gradient">
                  View Project
                </a>
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
