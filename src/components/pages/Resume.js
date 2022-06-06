import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>
        Download my <a href="javascript:;">resume</a>
      </p>
      <div className="front-end-stack">
        <h3>Font-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="back-end-stack">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
