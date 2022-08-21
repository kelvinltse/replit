import { Component } from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <Counter />
    </main>

  )
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter() {
    var newCount = this.state.count + 1;
    // newCount++;
    this.setState({ count: newCount });
    console.log("increase");
  }

  decrementCounter() {
    var newCount = this.state.count;
    newCount--;
    this.setState({ count: newCount });
    console.log("decrease");
  }

  render() {
    return (
      <div>
        Current Count: {this.state.count}
        <PlusButton onBoop = {() => this.incrementCounter()}/>
        <MinusButton onBoop = {() => this.decrementCounter()}/>
      </div>
    );
  }
}

class PlusButton extends Component {
  render(props) {
    return (
      <button onClick={this.props.onBoop}></button>
      );
  }
}

class MinusButton extends Component {
  render(props) {
    return (
      <button onClick={this.props.onBoop}></button>
    );
  }
}




