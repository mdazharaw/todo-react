import React from 'react';

export default class DeletedItemList extends React.Component {
    constructor(){
        super();
    
        this.state = {
          index: "",  
          task: "",  
          completed: false,
        };
  
      }
  render() {
      this.setState({
        index: this.props.index,  
        task: this.props.task,  
        completed: this.props.completed
      })

    return (
          <li key={this.props.index} 
          className="list-group-item ml-0 task">{this.props.task}
            <span key={this.props.index} 
            style={{cursor:"pointer"}}
            className="float-right" 
            // onClick={() => this.props.handleDelete(this.props.index)}
            >❌</span>
          </li>
    );
  }
}
