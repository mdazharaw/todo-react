import React from "react";
import TodoItem from "TodoItem";

export default class ItemList extends React.Component {
  constructor() {
    super();
  }
  
  
  render() {
    // let handleDelete = this.props.handleDelete;
    var itemList = this.props.taskArray.map(function(element, index){
      return (
        <TodoItem key={index}
          task={element.task}
          index={index}
          // handleDelete= {handleDelete}
        />
      );
    });

    return (
      <div className="container pl-0 pr-0">
        <ul className="list-group col-7">{itemList}</ul>
      </div>
    );
  }
}
