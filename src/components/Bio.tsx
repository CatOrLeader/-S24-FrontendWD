'use strict';

import React from 'react';

const Bio: React.FC = () => (
  <div className="bio">
    <h2>Briefly about me</h2>
    <div className="bio-content">
      <img
        src="https://iimg.su/s/29/BRKU5pbjFlmHg8dXSDKf8FoKG8iMdsL0h5jnhaQ2.jpg"
        alt="Me"
      />
      <p>
        Hi, I`m Mukhutdinov Artur, and I`m mostly a backend developer with a lot
        of pet projects in my pocket. Now my interests are dedicated to frontend
        development (HTML, CSS, JS/TS, and UX/UI).
      </p>
    </div>
  </div>
);

export default Bio;
