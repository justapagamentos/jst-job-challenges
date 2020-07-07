import React, { Component } from "react";

import back from "../../assets/back.svg";
import spotify from "../../assets/spotify.svg";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
    };
  }

  render() {
    return (
      <header className="Header">
        <div className="hBack">
          <a href="/">
            <img src={back} alt="icon-back" />
            <span>Voltar</span>
          </a>
        </div>
        <div className="hTitle">
          <h1>{this.state.title}</h1>
          <img src={spotify} alt="logo-spotify" />
        </div>
        <div className="hSubtitle">
          <h3>{this.state.subtitle}</h3>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  title: "Play.s",
  subtitle: "Descubra o estilo musical das suas playlists favoritas",
};

export default Header;
