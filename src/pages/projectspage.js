import React, { useMemo, useCallback } from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import { projects, graphicProjects, uxProjects } from '../data/data';

const ProjectsPage = () => {
  const renderFeaturedProjects = useCallback((projectsList, heading) => {
    return projectsList.length > 0
      ? <FeaturedProjects featuredProjects={projectsList} heading={heading} />
      : <p>No projects available under {heading}.</p>;
  }, []);

  const selectedProjects = useMemo(() => ({
    featured: projects,
    ux: uxProjects,
    graphic: graphicProjects
  }), []);

  return (
    <div className="projects-page container mt-5">
      {Object.entries(selectedProjects).map(([key, value]) => (
        <React.Fragment key={key}>
          {renderFeaturedProjects(value, `${key.charAt(0).toUpperCase() + key.slice(1)} Projects`)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectsPage;
