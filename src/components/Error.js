import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  const color = { color: "red" };
  return (
    <div>
      <h1 style={color}>Oops!!!</h1>
      <p>Something Went Wrong</p>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
