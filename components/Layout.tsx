import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  onChangeTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onChangeTheme }) => (
  <>
    <Header onChangeTheme={onChangeTheme} />
    {children}
    <Footer />
  </>
);

export default Layout;
