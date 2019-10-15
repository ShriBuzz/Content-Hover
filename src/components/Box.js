import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hover.css";

class Box extends Component {
  render() {
    console.log(this.props.icon);
    return (
      <div className={`container`}>
        <div className={`box`}>
          <div className={`icon`}>
            <FontAwesomeIcon className={`fa`} icon={this.props.icon} />
          </div>
          <div className={`content`}>
            <h3>{this.props.h3}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              architecto magni! Aperiam repellendus ducimus aliquid similique
              vel praesentium dolore nulla quasi?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
