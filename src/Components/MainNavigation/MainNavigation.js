import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => (
  <ul className={styles.NavLinks_List}>
    <li className={styles.NavLinks_List_Item}>
      <NavLink
        to="/"
        exact
        activeClassName={styles.Active_navLink}
        className={styles.NavLink}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.NavLinks_List_Item}>
      <NavLink
        to="/movies"
        activeClassName={styles.Active_navLink}
        className={styles.NavLink}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default MainNavigation;
