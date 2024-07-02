'use strict';

import React from 'react';
import Image from 'next/image';
import my_photo from "../public/images/me.jpg"

const Bio: React.FC = () => (
  <div className="bio">
    <h2>Briefly about me</h2>
    <div className="bio-content">
      <Image
        src={my_photo}
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