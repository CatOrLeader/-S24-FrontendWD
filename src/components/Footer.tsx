'use strict';

import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <h2 className="footer-header">Connection Links</h2>
    <div className="social-links">
      <a href="https://github.com/catorleader" id="gh-link">
        <img
          src="https://iimg.su/s/29/gIDBsyc45xOAr20Uo1gGYEEENVWYOSIKjd2sjdWj.png"
          alt="GitHub"
        />
      </a>
      <a href="https://t.me/catorleader" id="tg-link">
        <img
          src="https://iimg.su/s/29/p3Ah3POzGh3IEz7Z2XPDWQmkJ7FX27jBeo75OeNp.png"
          alt="Telegram"
        />
      </a>
      <a href="mailto:arturmuxutdinov@gmail.com" id="email">
        <img
          src="https://iimg.su/s/29/Gi6YmHZxXxLWQ37eTdIno1lM0oET39uqtsCNxsV0.png"
          alt="Email"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
