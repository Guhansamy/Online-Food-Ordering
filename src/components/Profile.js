import { useState , useEffect } from "react";
const Profile = (props) => {
//useEffect will get worked after the fuction is performed which it 
//takes place at the end of the activiy
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(0);

    const {name , color } = props;

function updateCount() {
    setCount(1)
    setCount1(2)
}

    useEffect(() => {
        console.log("use effect has been called")
        
        const timer = setInterval(() => {
            console.log("Interval created functional component")
        },5000) 
        // here 1000 indicates that is after every 1 second
// even when we unmounnted from the function or when come out of the page the timer will run and display the output
        return() => {
            console.log("functional component is unmounted")
            clearInterval(timer);
        }
    },[count]);

    return (<>
        <h1>Profile Component</h1>
        <h2> name : {name}</h2>
        <h3> colour : {color}</h3>
        <h3> Count : {count}</h3>
        <h3>Count1 : {count1}</h3>
        <button onClick={updateCount}>Update Count</button>
    </>)
}

export default Profile;