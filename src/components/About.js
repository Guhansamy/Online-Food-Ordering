import ProfileClass from "./Profileclass";
import Profile from "./Profile";
import React from "react";

// const About = () => {
//     return (<>
//     <h1> About Component </h1>
//     <Profile name = "Joseph" color = "Yellow"/>
//     <ProfileClass name = "Steve" color = "Yellow"/>
//     </>
//     );
// };

class About extends React.Component {
    constructor (){
        super();

        console.log("Parent constructor");
    }
    // need constructor only when we are using props

componentDidMount() {
    console.log("Parent component mounted");
}

componentDidUpdate() {
    console.log("Parent Component Updated")
}

componentWillUnmount() {
    console.log("Component will unmount");
}

    render(){
        console.log("Parent render");

        return(
            <>
             <h1> About Component </h1>
              {/* <Profile name = "Joseph" color = "Yellow"/> */}
            <ProfileClass name = "Steve" color = "Yellow"/>
            </>
        )
    }
}
export default About;

/** flow of the react
 * parent constructor
 * parent rendered
 * child constructor
 * child render
 * child mounted => the pointer is in child component so it will get fully rendered first and then other
 * parent mounted
 * parent unmounted
 * child unmounted
 */