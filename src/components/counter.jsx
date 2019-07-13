import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.value,
    imgURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  style = {
    fontSize: 20
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDeIncrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span style={this.style} className={classes}>
          {this.formatcount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDeIncrement}
          className="btn btn-secondary m-2 btn-sm"
        >
          -
        </button>
        <button
         className="btn btn-danger"
         onClick = {()=> this.props.onDelete(this.props.id)}
         >
         Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatcount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
