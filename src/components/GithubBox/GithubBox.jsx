import React, { Component } from "react";

import github from "../../assets/github.svg";
import "./GithubBox.scss";

class GithubBox extends Component {
  render() {
    return (
      <div className="GithubBox">
        <div className="GithubContainer">
          <h3>Colabore com nosso projeto!</h3>
          <div className="gitLink">
            <div className="gitIcon">
              <img src={github} alt="github-icon" />
            </div>
            <a href="https://github.com/dxxglas/jst-job-challenges">
              /dxxglas/jst-job-challenges
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubBox;
