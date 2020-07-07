import React, { Component } from "react";

import headphone from "../../assets/headphone.svg";
import outline from "../../assets/outline.svg";
import "./TableCard.scss";

class TableCard extends Component {
  render() {
    return (
      <div className="TableCard">
        <div className="cardIcon">
          <img src={headphone} alt="icon-headphone" className="imgIcon" />
          <img src={outline} alt="outline" className="imgOutline" />
        </div>
        <div className="genreInfos">
          <span className="genreStyle">Rock</span>
          <span className="genreAmount">14</span>
        </div>
      </div>
    );
  }
}

export default TableCard;
