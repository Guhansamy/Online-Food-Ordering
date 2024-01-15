import { CDN_URL } from "../common/constant";

const Restaurantcard = (props) =>{

    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = props.restaurant_data.info; //object destructuring in js
   
     return (
       <div className='charles-chicken'>
        <div>
       <img src={CDN_URL+cloudinaryImageId}
       alt='charles-chicken' ></img>
        </div>
       <div className='chicken-details'>
         <div>
           <h2>{name}</h2>
           {/* <span>{cuisines}</span> */}
         
           <h3>{avgRating}</h3>
           <span>{costForTwo}</span>
           </div>
         </div>
       </div>
   
     )
   }

   export default Restaurantcard;