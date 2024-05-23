import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructer called");
  }

  componentDidMount() {
    // console.log("parent didmount called");
  }

  render() {
    // console.log("parent render called");
    return (
      <div>
        <h1>This is an about page</h1>
        {/* <User name={"SNC"} /> */}
        <UserClass name={"first-child"} />
        {/* <UserClass name={"SNC"} /> */}
      </div>
    );
  }
}

export default About;
