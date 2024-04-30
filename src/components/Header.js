import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
const Header = () => {
  // const btnName = "Logout";
  const [btnName1, setbtnName1] = useState("Login");

  // once you click on the btn it values changes to logout because of useSate
  // we cannot achieve this using normal variable
  // once you click on btn btnName1 value changes and it will render the whole header component once again

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                setbtnName1("Logout");
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
