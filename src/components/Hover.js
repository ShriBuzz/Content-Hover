import React, { Component } from "react";
import Box from "./Box";
import "./Hover.css";
import { faSearch, faUser, faMap } from "@fortawesome/free-solid-svg-icons";
class Hover extends Component {
  state = {
    boxes: [
      { icon: faSearch, h3: "Search" },
      { icon: faUser, h3: "User" },
      { icon: faMap, h3: "Location" }
    ]
  };
  render() {
    return (
      <section className={`sec2`}>
        {this.state.boxes.map(b => (
          <Box icon={b.icon} h3={b.h3} />
        ))}
        {/* <Box icon={this.state.icon} /> */}
      </section>
    );
  }
}

export default Hover;
