import RestuarentCard from "./RestuarentCard";
import resList from "./utils/mockdata";
import { useState, useEffect } from "react";
import resList from "./utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state varable creation
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); //removed reslist inside useState so no longer use of reslist we can delete mockdata.js

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.459316&lng=78.365153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants
    );
  };

  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here

            const filtedList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filtedList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestuarentCard resData={resList[0]} /> */}
        {listOfRestaurants?.map((eachRestaurant, index) => (
          <RestuarentCard
            key={eachRestaurant.info.id}
            resData={eachRestaurant}
            // when ever using map or looping always give a unique id like above code
            // when a new restra come sit will renders all the restra if we dont use id's
            // passing id when looping so the ract only renders that new restra only
            //  key={index} and  this is one way of passing unq key
            //  dont use index as keys beacuse the order of array values might change
          />
        ))}

        {/* resName="Sai Foods" cusines="biryani, haleem"  to pass props manually  inside resturant card*/}
      </div>
    </div>
  );
};

export default Body;
