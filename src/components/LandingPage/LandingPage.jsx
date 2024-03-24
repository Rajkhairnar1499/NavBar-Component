import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.landingPageSearchWrapper}>
        <SearchBar placeholder="Search a song of your choice" />
      </div>
    </>
  );
};

export default LandingPage;
