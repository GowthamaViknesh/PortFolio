import React from 'react';

const ProjectCard = ({ title, subtitle, imageSrc, description, link }) => {
  return (
    <div className="column">
      <div class="card">
        <img src={imageSrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{title}</h3>
          <h5 className="card-subtitle">{subtitle}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-body">
          <a href={link} rel="newtab" target="_blank" class="card-link">
            Card link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
