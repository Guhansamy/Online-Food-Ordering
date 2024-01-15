//Take the restaurant id and render its deatils

import { useEffect,useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {

        fetchData();
    }, []);
// we use dependency array in useeffect hook to avoid the redendency of the function call
    const fetchData = async () => {
     const data = await fetch(MENU_API + resId)  //promise
    const json = await data.json();
    setResInfo(json);
}
return resInfo;
};

export default useRestaurantMenu;