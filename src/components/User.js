import { useState } from "react";

const User = (props) => {
  const [count, setcount] = useState(0);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <button
        type="button"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase count
      </button>
      <button
        style={{ marginLeft: "20px" }}
        type="button"
        onClick={() => {
          setcount(0);
        }}
      >
        reset
      </button>
      <h1>Name: {props.name}</h1>
      <p>Location: Hyd</p>
      <p>SocialMedia: snc_13</p>
    </div>
  );
};

export default User;
