import { useState, useEffect } from "react";
import {restaurant_data} from "../common/mock_data";
import Restaurantcard  from "./restaurantcard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import TopRatedRestaurants from "./TopRatedRestaurants";


const Body = () => {

  const [searchText, setSearchText] = useState("");   //setSearchText is function to update this variable
  const [allRestaurants , setAllRestaurants] = useState([])
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);


const isOnline = useOnline()


useEffect(() => {

  // if (!isOnline){
  //   return <h1>Looks Like You Are Offline Please Check Your Network Connection</h1>
  // }

  fetchData();
},[]);

if (!isOnline){
  return <h1>Looks Like You Are Offline Please Check Your Network Connection</h1>
}


function handleOnChangeEvent (e) {
  setSearchText(e.target.value);
}


function filterRestaurants() {
  const filterData = allRestaurants.filter(restaurant => {
      return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
   });
   setFilteredRestaurants(filterData);
 }

function filterTopRatedRestaurants(topRatedRestaurants) {

setFilteredRestaurants(topRatedRestaurants)

}

const fetchData = async () => { 

const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
);

const json = await data.json();  // await is used to waiting for the problem to be resolved

console.log("json :", json);

// Optional Chaining
// ? = it is optional chaining it will move to next step only if it has previous value

setFilteredRestaurants(
json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

setAllRestaurants (
json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
)
return [allRestaurants,filteredRestaurants]
};

    return (
    <>
    <div className="top-filter-bar">
      <div className='search-bar'>
        <input type='text' className = "border border-solid border-black" placeholder='Search' onChange={handleOnChangeEvent}></input>
        <button onClick={filterRestaurants}>Search</button>
      </div>

      <TopRatedRestaurants onFilter = {filterTopRatedRestaurants} restaurants = {filteredRestaurants}/>
      </div>
      {
        filteredRestaurants.length == 0 ? <Shimmer /> :
        (<div className='res-container'>
         
        {
          filteredRestaurants.map((restaurant) => {  // it is like loop which is looping through the array with the help of key
            return (
            <Link  to={`/restaurant/${restaurant.info.id}`}>
            {/* <Link to = {`/semma/${restaurant.info.id}`}>    */}
            <Restaurantcard key = {restaurant.info.id} 
            restaurant_data = {restaurant}/>
            </Link>
            // </Link>
            )
          })
        }
      </div>)
  
      }
  
     
      </>
      )
  }  

  export default Body;