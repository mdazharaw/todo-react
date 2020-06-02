import React from "react";
import TodoItem from "TodoItem";

export default class ItemList extends React.Component {
  constructor() {
    super();
  }
  // handleDelete(index){
  //   this.props.handleDelete(index)
  // }
  render() {
    var itemList = this.props.taskArray.map(function (element, index) {
      return (
        <TodoItem
          task={element.task}
          index={index}
          // handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div className="container pl-0 pr-0">
        <ul className="list-group list-group-flush col-7">
            {itemList}
        </ul>
      </div>
    );
  }
}
