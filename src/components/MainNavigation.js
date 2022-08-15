import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import ReactLogo from '../UI/ReactLogo';
import StarWarsLogo from '../UI/StarWarsLogo';
import PlusLogo from '../UI/PlusLogo';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ReactLogo />
        <div className={styles.plusLogo}>
          <PlusLogo />
        </div>
        <StarWarsLogo />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={(navData) => (navData.isActive ? styles.active : '')}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className={(navData) => (navData.isActive ? styles.active : '')}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planets"
              className={(navData) => (navData.isActive ? styles.active : '')}
            >
              Planets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
