import React  from "react";



class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        // we are using constructor here because it is class based components
        
        this.state = {
            count : 0,
            count1 : 1
        }
        console.log("child constructor");
    }

   componentDidMount() {
        console.log("child component get mounted");

        this.timer = setInterval(() => {
            console.log("Interval has been created");
        },1000)
   }

   componentDidUpdate() {
    console.log("child Coponent get updated");
   }

   componentWillUnmount() {
    console.log("child the coponent get unmounted");
    clearInterval(this.timer); // it is did after when we get detached from that component on that time our timer will get off 
   }

    render(){
        console.log("child get rendered");
        const { name , color } = this.props; 
        // instead of return in function based components here we use render
        const {count , count1} = this.state;
       
        function updateCounts () {
          
            this.setstate({count : 1, count1 : 2});
        }
       
        return (
            <>
            
            <h1> Profile Class Component</h1>
            <h2>name : {name}</h2>
            <h3> colour : {color} </h3>
            <h3>Count : {count} </h3>
            <h3> Count1 : {count1} </h3>
            <button onClick={() => this.setState({count : 1,count1 : 2})}>Update Count</button>
            </>
        )
    }
}

export default ProfileClass;