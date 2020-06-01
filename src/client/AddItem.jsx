import React from 'react';

export default class AddItem extends React.Component {

    constructor(){
      super();
  
      this.state = {
        value: "",  
        taskArray:[]
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    createNewTask(taskString){
        return {
            task: taskString,
            completed: false
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(){
        if(this.state.value != ""){
            var currentArray = this.state.taskArray
            currentArray.push(this.createNewTask(this.state.value))
            this.setState({taskArray: currentArray});
            this.setState({value: ""});
            console.log(this.state.taskArray)
        }
    }
    render() {
        var itemList = this.state.taskArray.map(function(task, index){
        return <li key={index} className="list-group-item ml-0 task">{task.task}</li>
        })
        return(
            <div className = "container">
                <br></br>
                <h4>Add New Task:</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control col-6" placeholder="Task description" aria-label="Task description" aria-describedby="addTasks" 
                    value={this.state.value} onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <br></br>
                </div>
                <div className="container pl-0 pr-0">
                    <ul className="list-group list-group-flush col-7">
                        {itemList.reverse()}
                    </ul>
                    </div>
            </div>

        )
    }
}  

