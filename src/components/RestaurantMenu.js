import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "./utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestuarentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log("resInfo", resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cloudinaryImageId } = resInfo?.cards?.[2]?.card?.card?.info;

  const { cuisines } = resInfo?.cards[2]?.card?.card?.info;
  // console.log("items", cuisines);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={CDN_URL + cloudinaryImageId} style={{ width: "100px" }} />
      <h2>menu</h2>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {cuisines.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarentMenu;
