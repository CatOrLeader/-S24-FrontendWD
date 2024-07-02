'use strict';

import React from 'react';

interface Project {
  title: string;
  description: string;
  tools: string;
  details: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Link Scrapper, 2023',
    description: 'Instant updates from your favorite resources.',
    tools:
      'Java 21, SpringBoot, JPA/JOOQ/JDBC, Liquibase, Docker, ' +
      'TestContainers, JUnit5',
    details:
      'This project consists of two microservices: a Telegram bot and a ' +
      'server. It allows users to receive instant notifications from resources ' +
      'they are subscribed to. This project was developed as part of the ' +
      'Tinkoff Java Backend course.',
    link: 'https://github.com/CatOrLeader/Tinkoff_Link_Tracker',
  },
  {
    title: 'A&DS Collection, 2023',
    description:
      'A collection of algorithms and data structures ' +
      'based on the ideas of Yegor Bugayenko.',
    tools: 'Java, GitHub',
    details:
      'A new perspective on classic algorithms and data ' +
      'structures. Utilizes fundamental OOP concepts and implements ' +
      'them based on the book "Elegant Objects". Endorsed by the author ' +
      'of the book.',
    link: 'https://github.com/CatOrLeader/DSAcollection_COOP',
  },
  {
    title: 'Innopolis University Booking System, 2023',
    description:
      'An ecosystem for creating room bookings at ' + 'Innopolis University.',
    tools:
      'Java, Maven, Gradle, Docker, SpringBoot, Hibernate, ' +
      'PostgreSQL, MariaDB, Gitlab, Postman, JS, React',
    details:
      'Our team implemented: Telegram Bot that interacts with a ' +
      'Mock server (simulating backend work with MS Outlook) and PostgreSQL ' +
      '(later MariaDB); Telegram WebApp on React. Deployed to a remote server ' +
      'in a container.',
    link: 'https://github.com/CatOrLeader/DSAcollection_COOP',
  },
];

const Projects: React.FC = () => (
  <div className="projects">
    <h2>My Pet Projects</h2>
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          <li>
            <strong>Tools and Technologies:</strong> {project.tools}
          </li>
          <li>
            <strong>Details:</strong> {project.details}
          </li>
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    ))}
  </div>
);

export default Projects;