import React from "react";
import Counter from "./counter";
class Counters extends React.Component {

  render() {
    return (
      <React.Fragment>
      <button 
      className="btn btn-warning btn-sm m-2"
      onClick = {this.props.onReset}
      >
        Reset
      </button>
        {this.props.counter.map(counter => (
          <Counter
            counter={counter}
            id = {counter.id}
            key={counter.id}
            onIncrement = {this.props.onIncrement}
            onDelete={this.props.onDelete}
            
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
