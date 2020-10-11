import projectsJSON from '../../Json_Templates/projects.json';
import React from 'react';
import './_Projects.scss';

const Projects = () => {
  const renderProjectDetails = projectsJSON.map(
    (
      project: {
        client: string;
        position: string;
        tech: string;
        details: string;
        'github-repo': string;
        'promo-image': string;
        website: string;
      },
      i: number,
    ) => {
      return (
        <div className="projects-wrapper" key={i}>
          <span className="text">{project.client} :</span>
          <span className="text"> {project.position}</span>
          <p className="tech">{project.tech}</p>
          <section>
            <h3>Project Details:</h3>
            <p className="details">{project.details}</p>
            {project['github-repo'] && (
              <a
                className="github-text"
                href={`http://${project['github-repo']}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB REPO
              </a>
            )}
            <div className="screenshots">
              <a
                className="project-screenshot"
                href={`http://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="promo-image"
                  src={require(`../../assets/images/${project['promo-image']}`)}
                />
              </a>
            </div>
          </section>
        </div>
      );
    },
  );
  return <div className="projects-container">{renderProjectDetails}</div>;
};

export default Projects;