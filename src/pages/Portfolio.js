import React from 'react';

function Project() {
  const projects = [
    {
      name: 'Run Buddy',
      skills: 'HTML/CSS',
      imgSrc: 'run_buddy.jpg',
      description: 'Sports site for health+',
      repo: 'https://github.com/fullstackneo/Run-Buddy',
      page: 'https://fullstackneo.github.io/Run-Buddy/',
    },
    {
      name: 'Park Advisor',
      skills: 'HTML/CSS/JS',
      imgSrc: 'park_advisor.jpg',
      description: 'Travel site for trip advice',
      repo: 'https://github.com/fullstackneo/Park-Advisor',
      page: 'https://noahslusher.github.io/NP-trip-planner/',
    },
    {
      name: 'Blue IT',
      skills: 'JS/Node/Mysql',
      imgSrc: 'blue_it.jpg',
      description: 'Blog site allowing CRUD',
      repo: 'https://github.com/Nesnah1307/blue-it/',
      page: 'https://blue-it-dinosaur.herokuapp.com/',
    },
    {
      name: 'Stacked',
      skills: 'MongoDB/Express/React/Node',
      imgSrc: 'stacked.jpg',
      description: 'Health site tracking data',
      repo: 'https://github.com/fullstackneo/Exercise-Mern',
      page: 'https://stacked-yo.herokuapp.com/',
    },
  ];

  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      {projects.map(project => (
        <div key={project.name} className="project">
          <div className="photo">
            <div className="mask"></div>
            <img
              className="feature"
              src={require(`../../assets/images/project_feature/${project.imgSrc}`)}
              alt={project.name}
            />
            <img
              className="logo"
              src={require(`../../assets/images/project_logo/${project.imgSrc}`)}
              alt={`${project.name} logo`}
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
              Github
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
