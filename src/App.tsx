'use strict';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Comic from './components/Comic';
import './styles.css';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <div>
        <Header onChangeTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic" element={<Comic />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
