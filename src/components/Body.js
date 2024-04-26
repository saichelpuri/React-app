import RestuarentCard from "./RestuarentCard";
import resList from "./utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestuarentCard resData={resList[0]} /> */}
        {resList.map((eachRestaurant, index) => (
          <RestuarentCard
            key={eachRestaurant.info.id}
            // when ever using map or looping always give a unique id like above code
            // when a new restra come sit will renders all the restra if we dont use id's
            // passing id when looping so the ract only renders that new restra only
            //  key={index} and  this is one way of passing unq key
            //  dont use index as keys beacuse the order of array values might change
            resData={eachRestaurant}
          />
        ))}

        {/* resName="Sai Foods" cusines="biryani, haleem"  to pass props manually  inside resturant card*/}
      </div>
    </div>
  );
};

export default Body;
