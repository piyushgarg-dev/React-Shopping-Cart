import React from "react";

class Counter extends React.Component {
  

  style = {
    fontSize: 20
  };

  

  

  

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span style={this.style} className={classes}>
          {this.formatcount()}
        </span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
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
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatcount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
