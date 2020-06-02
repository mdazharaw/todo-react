import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li className="list-group-item ml-0 task">
        {this.props.task}
        <span
          style={{ cursor: "pointer" }}
          className="float-right"
          // onClick={(event) => this.props.handleDelete(this.props.index)}
        >
          ❌
        </span>
      </li>
    );
  }
}
