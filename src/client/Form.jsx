import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      warning: ["", false],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    if (event.target.value.length < 1) {
      this.setState({ value: event.target.value });
      this.setState({ warning: ["Can't be empty", true] });
    } else if (
      event.target.value.length >= 1 &&
      event.target.value.length < 200
    ) {
      this.setState({ warning: ["", false] });
      this.setState({ value: event.target.value });
    } else if (event.target.value.length >= 200) {
      this.setState({ value: event.target.value });
      this.setState({ warning: ["Too long", true] });
    }
  }

  
  render() {
    
    return (
      <div className="container">
        <br></br>
        <h4>Add New Task:</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control col-6"
            placeholder="Task description"
            aria-label="Task description"
            aria-describedby="addTasks"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={(event) => {
                  this.props.handleSubmit(this.state.value)
                  this.setState({value: ""})
                }}
            >
              Submit
            </button>
          </div>
          <br></br>
        </div>
        <div>
          <p style={{ color: "red" }}>
            {this.state.warning[1] ? this.state.warning[0] : ""}
          </p>
        </div>
      </div>
    );
  }
}
