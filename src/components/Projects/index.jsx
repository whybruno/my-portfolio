import React from 'react';
import projectsData from '../../projects.json';

const Projects = () => {
  const projects = projectsData.projects;

  return (
    <main className="container-fluid">
      <section className="text-center">
        <div className="row pt-5 px-5 px-md-0">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">PROJECTS</h1>
            <p className="lead text-muted">In this section you will find a selection of my best front-end projects. Each project demonstrates my skills in different areas, such as HTML, CSS, JavaScript, frameworks like React.js, and popular libraries.</p>
            <h6 className="col-10 col-sm-8 mx-auto">Please feel free to contact me if you have any questions or feedback.</h6>
            <p>
              <a href="https://github.com/whybruno/" target="_blank" className="btn btn-dark my-2">GitHub</a>
            </p>
          </div>
        </div>
      </section>

      <div className="p-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project) => (
              <div className="col" key={project.id}>
                <div className="card shadow-sm">
                  <img src={project.screenshot} className="img-fluid bd-placeholder-img card-img-top" alt="..." width="100%" height="225"></img>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a type="button" target="_blank" className="btn btn-sm btn-dark me-1" href={project.githubUrl}>Repository</a>
                        <a type="button" target="_blank" className={`btn btn-sm btn-outline-dark ${!project.githubDeploy ? 'disabled' : ''}`} href={project.githubDeploy}>Deployed</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
};

export default Projects;