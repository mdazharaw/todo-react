import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state={
      clicked: false
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);

  }
  
  handleRemoveClick(){
    console.log("clicked")
    this.setState({clicked: true})
  }

  render() {
    
    return (
      <li className="list-group-item ml-0 task"
      style={{display: this.state.clicked ? "none":"inline"}}>
        {this.props.task}
        <span
          style={{ cursor: "pointer"}}
          className="float-right"
          onClick={this.handleRemoveClick}
        >
          ❌
        </span>
      </li>
    );
  }
}
