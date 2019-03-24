import React, { Component } from "react";
import "./App.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 5 }, { id: 2, value: 6 }, { id: 3, value: 0 }]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar cnt={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement}
            handleDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
