import React from 'react';

function Project() {
  const projects = [
    {
      name: 'project1 name',
      skills: 'HTML/JS',
      imgSrc: 'Park-Advisor.jpg',
      description: 'lorem lorem lorem lorem lorem',
      repo: 'https://github.com/fullstackneo',
      page: 'https://github.com/fullstackneo',
    },
    {
      name: 'project2 name',
      skills: 'HTML/JS',
      imgSrc: 'Park-Advisor.jpg',
      description: 'lorem lorem lorem lorem lorem',
      repo: 'https://github.com/fullstackneo',
      page: 'https://github.com/fullstackneo',
    },
    ,
    {
      name: 'project3 name',
      skills: 'HTML/JS',
      imgSrc: 'Park-Advisor.jpg',
      description: 'lorem lorem lorem lorem lorem',
      repo: 'https://github.com/fullstackneo',
      page: 'https://github.com/fullstackneo',
    },
    ,
    {
      name: 'project4 name',
      skills: 'HTML/JS',
      imgSrc: 'Park-Advisor.jpg',
      description: 'lorem lorem lorem lorem lorem',
      repo: 'https://github.com/fullstackneo',
      page: 'https://github.com/fullstackneo',
    },
  ];

  return (
    <section className="project-list">
      {projects.map(project => (
        <div key={project.name} className="project">
          <div className="photo">
            <img
              src={require(`../assets/images/${project.imgSrc}`)}
              alt={project.name}
            />
          </div>

          <h2 className="title">{project.name}</h2>
          <p className="skill">{project.skills}</p>
          <p className="description">{project.description}</p>
          <div className="action">
            <a target="blank" href="https://github.com/fullstackneo">
              Demo
            </a>
            <a target="blank" href="https://github.com/fullstackneo">
              Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
