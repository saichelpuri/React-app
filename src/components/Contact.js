import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Contact = (props) => {
  const [info, setinfo] = useState(null);
  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const data = await fetch("https://api.github.com/users/saichelpuri");
    const json = await data.json();
    if (data?.ok) {
      setinfo(json);
    }
    console.log(json);
  }

  if (!info) {
    return <Shimmer />;
  }

  return (
    <div>
      <p>{info.login}</p>
      <h1>this is a contact page</h1>
    </div>
  );
};

export default Contact;
