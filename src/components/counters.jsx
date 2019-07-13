import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  delete = counterID => {
    const counters = this.state.counters.filter(c => c.id!==counterID);
    this.setState({counters})
  };

  handelIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
     counters[index].value++;

     this.setState({Counters})

  }

  handelReset = () =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters})
  }

  render() {
    return (
      <React.Fragment>
      <button 
      className="btn btn-warning btn-sm m-2"
      onClick = {this.handelReset}
      >
        Reset
      </button>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            id = {counter.id}
            key={counter.id}
            onIncrement = {this.handelIncrement}
            onDelete={this.delete}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
