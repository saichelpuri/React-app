import RestuarentCard from "./RestuarentCard";
import resList from "./utils/mockdata";
import { useState, useEffect } from "react";
import resList from "./utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import SudokuGame from "./SudokuGame";

const Body = () => {
  // console.log("boday renderd"); when ever useState varable changes it will re render the body compoent
  // local state varable creation
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); //removed reslist inside useState so no longer use of reslist we can delete mockdata.js
  const [filterdRestaurants, setfilterdRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.459316&lng=78.365153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
    );

    const json = await data.json();

    // console.log(json);

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants
    // );
  };

  // console.log(json);

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus == false)
    return <h1>hehe! you are offline pay the internet bill</h1>;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter((res) =>
              // console.log(res.info.name);
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterdRestaurants(filterRestaurants);
            // console.log(searchText);

            // console.log(filterRestaurants, listOfRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            // here res means each object in the array
            const filtedList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilterdRestaurants(filtedList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>

      <div className="res-container">
        {/* <RestuarentCard resData={resList[0]} /> */}
        {/* below each restaurant refers each element in the array inthat array each element is an object */}
        {filterdRestaurants.map((eachRestaurant, index) => (
          <Link
            key={eachRestaurant?.info?.id}
            to={"/restaurant/" + eachRestaurant?.info?.id}
          >
            {" "}
            <RestuarentCard
              resData={eachRestaurant}
              // when ever using map or looping always give a unique id like above code
              // when a new restra come sit will renders all the restra if we dont use id's
              // passing id when looping so the ract only renders that new restra only
              //  key={index} and  this is one way of passing unq key
              //  dont use index as keys beacuse the order of array values might change
            />
          </Link>
        ))}

        {/* resName="Sai Foods" cusines="biryani, haleem"  to pass props manually  inside resturant card*/}
      </div>
    </div>
  );
};

export default Body;
