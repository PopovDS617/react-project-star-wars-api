import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePageContent}>
      <div className={styles.homePageTitle}>
        <h1>A long time ago in a galaxy far, far away...</h1>
      </div>

      <div className={styles.homePageArticle}>
        <p>
          "For over a thousand generations the Jedi Knights were the guardians
          of peace and justice in the Old Republic. Before the dark times.
          Before the Empire." ―Obi-Wan Kenobi
        </p>
      </div>
    </div>
  );
};

export default HomePage;
