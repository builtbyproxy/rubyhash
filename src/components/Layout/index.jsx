import React from 'react';
import styles from './styles.module.scss';

const Layout = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>{title}</h1>
        <p>
          In testing frameworks like Minitest, when a test involving hashes fails, 
          Minitest helps developers by displaying a diff of the expected and actual 
          hashes. This diff highlights the differences between the two hashes, 
          making it easier to identify discrepancies.
        </p>
        <p>
          In testing frameworks like Minitest, when a test involving hashes fails, 
          Minitest helps developers by displaying a diff of the expected and actual hashes. 
          This diff <strong>does not</strong> highlight the differences between the two hashes, 
          making it difficult to identify discrepancies. Rubyhash is here to help show the difference
        </p>
        <p>
          To use RubyHash, please paste the hash contents directly from console taking care to include the
          '-' and '+' markers for us to compare the two hashes correctly. 
        </p>
      </header>
      <main>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
