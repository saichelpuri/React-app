import { useEffect } from "react";
const RestuarentMenu = () => {
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.450831&lng=78.378523&restaurantId="
    );
  };
  const josn = data.josn();
  console.log(json);
  return (
    <div className="menu">
      <h1>Name of the restaurant</h1>
      <h2>menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Cool Drinks</li>
      </ul>
    </div>
  );
};

export default RestuarentMenu;
