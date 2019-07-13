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
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            value={counter.value}
            id = {counter.id}
            key={counter.id}
            onDelete={this.delete}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
