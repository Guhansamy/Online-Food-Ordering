import { useState } from "react";
import { useEffect } from "react";

const useOnline = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    const handleOnline = () => {
        setOnlineStatus(true);

    }
    const handleOffline = () => {
        setOnlineStatus(false);
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline);

        window.addEventListener("offline",handleOffline);

            // return() => {
            //     window.removeEventListener("online",true);
            //     window.removeEventListener("offline",false);
            // }
    },[]);
    return onlineStatus;
};

export default useOnline;

// always to remove event listeners we need to write it inside the retrun status
// we need to remove to avoid storage of memory