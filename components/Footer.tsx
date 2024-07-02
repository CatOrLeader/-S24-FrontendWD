import React from 'react';
import Image from 'next/image';
import github_img from '../public/images/github-icon.png';
import tg_img from '../public/images/telegram-icon.png';
import email_img from '../public/images/email-icon.png';

const Footer: React.FC = () => (
  <footer>
    <h2 className="footer-header">Connection Links</h2>
    <div className="social-links">
      <a href="https://github.com/catorleader" id="gh-link">
        <Image src={github_img} alt="GitHub" />
      </a>
      <a href="https://t.me/catorleader" id="tg-link">
        <Image src={tg_img} alt="Telegram" />
      </a>
      <a href="mailto:arturmuxutdinov@gmail.com" id="email">
        <Image src={email_img} alt="Email" />
      </a>
    </div>
  </footer>
);

export default Footer;
