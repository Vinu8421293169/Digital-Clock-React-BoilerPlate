import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }

  updateTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{this.state.time}</h3>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default App;
