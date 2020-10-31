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
      this.setState({
        seconds: (this.state.seconds + 1) % 60
      });
    }, 1000);

    setInterval(() => {
      this.setState({
        seconds: (this.state.minutes + 1) % 60
      });
    }, 60000);

    setInterval(() => {
      this.setState({
        seconds: (this.state.hours + 1) % 60
      });
    }, 3600000);
  }
}

export default App;
