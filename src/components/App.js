import React, { Component } from "react";
import "../styles/App.css";

let time = new Date();

class App extends Component {
  constructor() {
    super();
    this.state = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }

  render() {
    return (
      <div className="Clock">
        <h3 id="time">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}{" "}
          {this.state.hours >= 12 ? "PM" : "AM"}
        </h3>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      let t = new Date();
      this.setState({
        hours: t.getHours(),
        minutes: t.getMinutes(),
        seconds: t.getSeconds()
      });
    }, 1000);
  }
}

export default App;
