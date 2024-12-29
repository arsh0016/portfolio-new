import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects, graphicProjects, uxProjects } from '../data/data';
import './detailspage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);

  const allProjects = useMemo(() => [...projects, ...graphicProjects, ...uxProjects], []);

  const project = useMemo(() => {
    return allProjects.find((project) => project.id === parseInt(id));
  }, [id, allProjects]);

  const loadImage = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(src);
      image.onerror = () => reject('Image failed to load');
    });
  }, []);

  useEffect(() => {
    if (project && project.image) {
      loadImage(project.image)
        .then(() => setError(null))
        .catch(() => setError('Error loading image'));
    }
  }, [project, loadImage]);

  if (!project) {
    return <p className="project-not-found">Project not found.</p>;
  }

  return (
    <div className="project-detail-container">
      {error && <p className="image-error">{error}</p>}
      <div className="project-detail-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
          loading="lazy"
        />
        <div className="project-detail-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
