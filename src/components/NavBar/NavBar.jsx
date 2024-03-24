import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";


const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <Logo id={styles.logo} />
        </div>
        <div className={styles.searchWrapper}>
        <SearchBar placeholder="Search a song of your choice" />
        </div>
        <div
          className={styles.nav_link}
        >
          Give Feedback
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
