import React from 'react';
import { hot } from 'react-hot-loader';
import Form from 'Form'
import ItemList from 'ItemList'

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      taskArray: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);

  }
  
  createNewTask(taskString) {
    return {
      task: taskString,
      completed: false,
    };
  }

  handleSubmit(value) {
    if (value != "" && value.length < 200) {
      var currentArray = this.state.taskArray;
      currentArray.push(this.createNewTask(value));
      this.setState({ taskArray: currentArray });
      console.log(this.state.taskArray);
    }
  }

  // handleDelete (index){
  //   console.log(`Task ${index} deleted`)
  //   let updatedArray = this.state.taskArray.splice(index,1);
  //   this.setState({taskArray: updatedArray})
  // }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}/>
        <ItemList taskArray={this.state.taskArray.reverse()} 
        // handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default hot(module)(TodoApp);
