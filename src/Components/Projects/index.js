import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import ProjectCard from './Projectcard';

const Projects = () => {
  const [letterclass, setLetterclassName] = useState('text-animate');
  const project = [
    {
      title: 'Calculator',
      subtitle: 'Beginner Project',
      imageSrc:
        'https://assets.materialup.com/uploads/a7fd621e-a45a-4f93-aa8c-6d1d041ed5df/preview.png',
      description:
        'Created a simple calculator using HTML, CSS, and JavaScript, showcasing foundational skills in front-end web development.',
      link: 'https://gowthamaviknesh.github.io/Calculator-App-JS-HTML-CSS/',
    },
    {
      title: 'Weather-API',
      subtitle: 'InterMediate Project',
      imageSrc:
        'https://i.pinimg.com/originals/ac/58/f6/ac58f6b07e0a4ec8fa125f50915f22c7.gif',
      description:
        'The Intermediate Weather Forecast Web App is a simple yet effective web application that allows users to access real-time weather information for any location worldwide.',
      link: 'https://gowthamaviknesh.github.io/Api-Projects/WeatherApi/',
    },
    {
      title: 'To-Do List',
      subtitle: 'Rect Beginner Project',
      imageSrc: 'https://todogroup.org/img/logo.svg',
      description:
        'The To-Do List is a simple task management application that allows users to create, track, and organize their daily tasks efficiently. Users can perform CRUD functionality.',
      link: 'https://cosmic-fairy-759b41.netlify.app/',
    },
    {
      title: 'Shopping-Cart',
      subtitle: 'React InterMediate Project',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdYoPTlpkN4qUBtziIGCNzZDN5YrrFrWXlA&usqp=CAU',
      description:
        'The Shopcart Beginner Project is an introductory level e-commerce web app that helps a basic shopping cart system.Basic level CRUD functionlity',
      link: 'https://poetic-crisp-4dbc79.netlify.app/',
    },
  ];
  return (
    <>
      <div className="project-page">
        <div
          className="text"
          // style={{ display: 'flex', justifyContent: 'center', color: 'yellow' }}
        >
          <h1>
            <AnimatedLetters
              letterclassName={letterclass}
              strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
              idx={15}
            />
          </h1>
        </div>
        <div className="container">
          {project.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageSrc={project.imageSrc}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
