import React, { Component } from "react";
import TableCard from "../TableCard/TableCard";

import "./TableBox.scss";

class TableBox extends Component {
  render() {
    return (
      <div className="TableBox">
        <TableCard />
      </div>
    );
  }
}

export default TableBox;
