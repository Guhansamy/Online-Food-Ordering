import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import Body from './components/Body';
import Profile from './components/Profile';
import RestaurantDetails from './components/RestaurantDetails'
import appStore from './common/appStore';
import Cart from './components/Cart';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : < App/>,
    errorElement : <Error/>,
    children : [
      {
        path:'/',
        element : <Body/>
      },
      {
        path:'/about',
        element : <About />,
        children : [
          {
          path : "profile",
          element : <Profile/>,
          },
        ],
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/restaurant/:resId',
        element : <RestaurantDetails/>,
      },
      {
        path : "/cart",
        element : <Cart/>,
      },
      {
        path : "/Login",
        element : <Login />
      },
    ],
  },
]);

root.render (<RouterProvider router = {appRouter} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <App />
//   </React.StrictMode>
// );

// const ter = ReactDOM.createRoot(document.getElementById('tt'))
// ter.render(
//   <React.Fragment>

// <h1>Hello</h1>
//   <h2> This is new</h2>
//   </React.Fragment>
// );

reportWebVitals();
