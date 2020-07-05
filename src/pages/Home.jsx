import React, { Component } from "react";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ExploreBox from "../components/ExploreBox/ExploreBox";
import GithubBox from "../components/GithubBox/GithubBox";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <SearchBar />
        <ExploreBox />
        <GithubBox />
      </div>
    );
  }
}

export default Home;
