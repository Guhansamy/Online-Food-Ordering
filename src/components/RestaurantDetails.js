import { useParams } from "react-router-dom";
import useRestaurantMenu from "../common/useRestaurantsMenu";
import { CDN_URL } from "../common/constant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../common/cartSlice";

const RestaurantDetails = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    const dispatch = useDispatch();
    
    const handleAddItem = (item) => {
      dispatch(addItem(item));
    }

    const itemCards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card.itemCards;
      console.log(itemCards);

      if (resInfo == null) return <Shimmer />

      return (
        <>
          <div className="flex text-center">
            <div className="m-12">
              {itemCards.map((item) => (
                <div
                  data-testid="foodItems"
                  key={item.card.info.id}
                  className="p-2 m-2 border-gray-200 border-4 rounded-3xl text-left flex justify-between
                   bg-neutral-500 text-stone-50 font-semibold text-lg">
                  <div className="w-9/12">
                    <div className="py-2">
                      <span>{item.card.info.name}</span>
                      <span>
                        - ₹
                        {item.card.info.defaultPrice
                          ? item.card.info.defaultPrice / 100
                          : item.card.info.finalPrice / 100}
                      </span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                  </div>
                  <div className="w-3/12 p-4">
                    <div className="absolute">
                      <button
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick={() => handleAddItem(item) } >
                        Add +
                      </button>
                    </div>
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    };
    

export default RestaurantDetails;