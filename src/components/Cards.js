import React, { Component } from "react";
import "./Hover2.css";
class Cards extends Component {
  render() {
    const { date, h2, reads, views, comments } = this.props;
    return (
      <div className={`card`}>
        <div className={`card-image`}></div>
        <div className={`card-text`}>
          <span className={`date`}>{date}</span>
          <h2>{h2}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className={`card-stats`}>
          <div className={`stat`}>
            <div className={`value`}>
              {reads}
              <sup>m</sup>
            </div>
            <div className={`type`}>read</div>
          </div>
          <div className={`stat border`}>
            <div className={`value`}>{views}</div>
            <div className={`type`}>views</div>
          </div>
          <div className={`stat`}>
            <div className={`value`}>{comments}</div>
            <div className={`type`}>comments</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
