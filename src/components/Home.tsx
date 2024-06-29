'use strict';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bio from './Bio';
import Projects from './Projects';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Bio />
      <Projects />
      <div className="xkcd-comic-btn">
        <button className="comic-btn" onClick={() => navigate('/comic')}>
          There is nothing here...
        </button>
      </div>
    </div>
  );
};

export default Home;
