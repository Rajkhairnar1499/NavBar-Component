import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const SearchBar = (props) => {
  const { placeholder } = props;

  return (
    <div>
      <div>
        <form className={styles.wrapper}>
          <input className={styles.search} placeholder={placeholder} />
          <button className={styles.searchButton}>
            <SearchIcon className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
