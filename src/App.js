import React, { Component } from "react";
import Hover from "./components/Hover";
import Hover2 from "./components/Hover2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className={`body`}>
        <Hover2 />
        <Hover />
      </section>
    );
  }
}

export default App;
