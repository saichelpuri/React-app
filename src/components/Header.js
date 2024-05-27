import { useEffect, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
  // const btnName = "Logout";
  const [btnName1, setbtnName1] = useState("Login");
  // console.log("header rendered");

  // once you click on the btn it values changes to logout because of useSate
  // we cannot achieve this using normal variable
  // once you click on btn btnName1 value changes and it will render the whole header component once again
  // if we ommit dependency array from useEffect use effect will be called every time header renders means every time a sate variable changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName1]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btnName1 === "Login"
                  ? setbtnName1("Logout")
                  : setbtnName1("Login");
              }}
            >
              {btnName1}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
