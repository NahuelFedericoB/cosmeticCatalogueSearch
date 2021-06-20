/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import { searchBarPlayHolder } from "../../constants";
import useMenuBar from "./hooks";

const MenuBar = () => {
  const { handleSearchBar, handleFilterChange, showSearchBar } = useMenuBar();

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a onClick={() => handleSearchBar(true)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showSearchBar ? "showing " : "") + "search-container"}>
        <input
          type="text"
          onChange={(event) => handleFilterChange(event.target.value)}
          placeholder={searchBarPlayHolder}
        />
        <a href="#" onClick={() => handleSearchBar(false)}>
          <i className="material-icons close">close</i>
        </a>
      </div>
    </header>
  );
};

export default MenuBar;
