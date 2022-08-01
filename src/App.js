import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <main className="container">
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </>
    );
  }
}

export default App;
