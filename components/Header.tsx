import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  onChangeTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeTheme }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>My Developer Journey</h1>
    <button className={styles.themeButton} onClick={onChangeTheme}>
      Change Theme
    </button>
    <nav className={styles.nav}>
      <Link href="/" passHref className={styles.navLink}>
        Home
      </Link>
      <Link href="/comic" passHref className={styles.navLink}>
        Comic
      </Link>
    </nav>
  </header>
);

export default Header;
