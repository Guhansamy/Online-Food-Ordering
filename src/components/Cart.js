import { useDispatch } from "react-redux";
import { clearCart,addItem,removeItem } from "../common/cartSlice";
import { UseSelector,useSelector} from "react-redux/es/hooks/useSelector";
import { CDN_URL } from "../common/constant";

const Cart = () => {

const dispatch = useDispatch();

const cartItems = useSelector((store) => store.cart.items );

const handleClearCart = () => {
    dispatch(clearCart());
}

const handleRemoveCart = () => {
    dispatch(removeItem())
}

    return (
        <>
        <h1> This is my Cart </h1>
        <button className="bg-black m-2 text-white rounded-lg" onClick={handleClearCart}> 
        Clear Cart  </button>

        <button className="bg-black m-2 text-white rounded-lg" onClick={handleRemoveCart}> 
        Remove Item  </button>

        {
        cartItems.map((item) => (
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
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="w-full"
                    />
                  </div>
                </div>
              ))
              }
        </>
    )
}

export default Cart;