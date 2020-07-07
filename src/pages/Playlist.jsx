import React, { Component } from "react";

import Header from "../components/Header/Header";
import GraphicBox from "../components/GraphicBox/GraphicBox";
import TableBox from "../components/TableBox/TableBox";

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <Header title="Nome da Playlist" subtitle="40 músicas" />
        <GraphicBox />
        <TableBox />
      </div>
    );
  }
}

export default Playlist;
