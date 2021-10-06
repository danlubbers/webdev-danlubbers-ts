import projectsJSON from '../../Json_Templates/projects.json';
import React from 'react';
import './_Projects.scss';
import ReactGA from 'react-ga';

const Projects = () => {
  const websiteImage = (project: string | null) => {
    return (
      <img
        className="screenshot__promo-image"
        src={require(`../../assets/images/${project}`)}
        alt={`${project}`}
      />
    );
  };

  const renderProjectDetails = projectsJSON.map(
    (
      project: {
        client: string;
        position: string;
        tech: string;
        details: string;
        'github-repo': string;
        'promo-image': string | null;
        website: string | null;
      },
      i: number,
    ) => {
      return (
        <div className="project" key={i}>
          <span className="project__text">{project.client} :</span>
          <span className="project__text"> {project.position}</span>
          <h3 className="project__heading--3">Tech:</h3>
          <p className="project__tech">{project.tech}</p>
          <section className="section">
            <h3 className="section__heading--3">Project Details:</h3>
            <p className="section__details">{project.details}</p>
            {project['github-repo'] && (
              <a
                className="projects-wrapper__github-text"
                href={`http://${project['github-repo']}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: 'WebDev: Projects',
                    action: `WebDev: [Github] - Clicked on a project link`,
                    label: `WebDev: [Github] - ${project.client}`,
                  })
                }
              >
                GITHUB REPO
              </a>
            )}
            <div className="screenshot">
              {project.website ? (
                <a
                  className="screenshot__project"
                  href={`http://${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    ReactGA.event({
                      category: 'WebDev: Projects',
                      action: `WebDev: [Website] - Clicked on a project link`,
                      label: `WebDev: [Website] - ${project.client}`,
                    })
                  }
                >
                  {websiteImage(project['promo-image'])}
                </a>
              ) : (
                <div className="screenshot__project">{websiteImage(project['promo-image'])}</div>
              )}
            </div>
          </section>
        </div>
      );
    },
  );
  return <div className="projects-container">{renderProjectDetails}</div>;
};

export default Projects;
