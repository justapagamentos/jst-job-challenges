import React, { Component } from "react";

import spotify from "../../assets/spotify.svg";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="hTitle">
          <h1>Play.s</h1>
          <img src={spotify} alt="logo-spotify" />
        </div>
        <div className="hSubtitle">
          <h3>Descubra o estilo musical das suas playlists favoritas</h3>
        </div>
      </header>
    );
  }
}

export default Header;
