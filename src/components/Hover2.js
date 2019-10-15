import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Cards from "./Cards";

import "./Hover2.css";
class Hover2 extends Component {
  state = {
    cards: [
      { date: "4 days ago", h2: "Post 1", reads: 4, views: 5123, comments: 32 },
      { date: "7 days ago", h2: "Post 2", reads: 7, views: 412, comments: 12 },
      { date: "9 days ago", h2: "Post 3", reads: 2, views: 3422, comments: 22 },
      { date: "3 days ago", h2: "Post 4", reads: 3, views: 573, comments: 8 },
      { date: "8 days ago", h2: "Post 5", reads: 2, views: 1853, comments: 39 },
      { date: "12 days ago", h2: "Post 6", reads: 6, views: 2649, comments: 13 }
    ]
  };
  render() {
    return (
      <section className={`sec1`}>
        <div className={`scroll`}>
          <div className={`left-scroll invisible`}>
            <p>
              <FontAwesomeIcon icon={faAngleLeft} />
            </p>
          </div>
          <div className={`right-scroll`}>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          {this.state.cards.map(c => (
            <Cards
              date={c.date}
              h2={c.h2}
              reads={c.reads}
              views={c.views}
              comments={c.comments}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Hover2;
