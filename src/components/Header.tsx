'use strict';

import React from 'react';

interface HeaderProps {
  onChangeTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeTheme }) => (
  <header>
    <h1>My Developer Journey</h1>
    <button onClick={onChangeTheme}>Change Theme</button>
  </header>
);

export default Header;
