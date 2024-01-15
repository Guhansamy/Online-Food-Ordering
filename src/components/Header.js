import { Link } from "react-router-dom";
import useOnline from "../common/useOnline";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";

function Header(){

  const [loggedIn , isLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items );

    return ( 
    <nav className="flex justify-between border border-solid border-black m-2">
      <img className=' lg:w-[200px] w-[100px]'
       src='https://imgs.search.brave.com/_ir6zaaqNCfR8_CejRRrDsmbrBcvxP2xhiPYzsrqspc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzAxLzk4LzI2/LzM2MF9GXzEwMTk4/MjY5MV9oVW11WFQz/dGdqcW9zdmhVRGJC/TXV3OGpYMWtON1ps/ZS5qcGc'
        alt='logo'>
      </img>
  
      <ul>
        <li>Online Status : {isOnline ? "✅" : "⛔"} </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/groceries">  Groceries</Link></li>
        <li><Link to="/cart"> Cart - {cartItems.length}</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> 
          
          <button> <Link to="/Login">
          {isLoggedIn ? <button onClick={() => isLoggedIn(false)}> Login</button> : <button> LogOut</button>}
          </Link></button> </li>
      </ul>
  
      </nav>)
  };

  export default Header;