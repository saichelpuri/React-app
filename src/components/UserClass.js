import React, { useState } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy name",
        id: 123,
      },
    };
    // console.log(this.props.name + " constructer called");
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    console.log(json);
    // console.log(json.title);
    // console.log(this.props.name + " didmount called");
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log(this.props.name + " render called");
    return (
      <div className="user-card">
        <h1 style={{ color: "red" }}>{this.state.userInfo.title}</h1>
        <h1 style={{ color: "green" }}>{this.state.userInfo.userId}</h1>
        <h1>Count: {this.state.count}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        <button
          style={{ marginLeft: "20px" }}
          type="button"
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          reset
        </button>
        <h1>Name: {this.props.name}</h1>
        <p>Location: Hyd</p>
        <p>SocialMedia: snc_13</p>
      </div>
    );
  }
}

export default UserClass;
