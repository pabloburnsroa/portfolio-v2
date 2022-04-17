import * as React from 'react';
import * as styles from '../styles/layout.module.css';
import Navbar from './Navbar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
