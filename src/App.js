import React, {useEffect} from 'react';
import Header from './Header.js';
import Home from './Home.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import {auth} from './firebase.js';
import {useStateValue} from './StateProvider.js';
import Payment from './Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.js';

const promise = loadStripe('pk_test_51KPOacSJ18GqVmJhyDIMQTinqvMvC0nZoHh8u6VnbbZEAuDxxg0dmCks948kzoq2a5ENgISUQ0BsyjvVIAPDIpsl00vSs7aiTU');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("The User is >>> ", authUser);
      if(authUser){
        // the user just logged in / the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }
      else{
        // the user is logged out
        dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<><Header /><Orders /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route 
            path="/payment" 
            element={<><Header /><Elements stripe={promise}> <Payment /></Elements></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
