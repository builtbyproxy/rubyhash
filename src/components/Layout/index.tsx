import React from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
  subtitle: string;
}

const Layout: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <main>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
