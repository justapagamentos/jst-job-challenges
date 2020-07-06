import React, { Component } from "react";

import search from "../../assets/search.svg";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <form className="SearchBar">
        <div className="sBox">
          <input type="search" placeholder="Cole o link da playlist aqui..." />
          <button>
            <img src={search} alt="search-icon" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
