import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <h1> React + Start Wars API</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planets"
              className={(navData) => (navData.isActive ? styles.active : "")}
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
