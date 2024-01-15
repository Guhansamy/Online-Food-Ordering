// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Restaurantcard from "./components/restaurantcard";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './common/appStore';

/**Header
 *  -Restaurant logo
 *   - navigation items
 * 
 * Body:
 *  -search bar
 *  -Restaurant cards
 * 
 * Restaurant cards:
 *  -image of restaurant
 *  -name of the restaurant
 *  -cuisiness
 *  -rating
 *  -cost
 *  -time to deliver
 * 
 * Footer:
 *  -copyright
 *  -links
 *  -About restaurant
 */

//Every contents below are written first here later they are transfered into different components



function App() {
  return (
    <Provider store={appStore} >
    < Header/>
    <Outlet/>
    </Provider>
  );
}

export default App;

//Modular = single responsibility principle
