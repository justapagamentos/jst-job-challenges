import React, { Component } from "react";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ExploreBox from "../components/ExploreBox/ExploreBox";
import GithubBox from "../components/GithubBox/GithubBox";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header
          title="Play.s"
          subtitle="Descubra o estilo musical das suas playlists favoritas"
        />
        <SearchBar />
        <ExploreBox />
        <GithubBox />
      </div>
    );
  }
}

export default Home;
