 //import { Elements } from "@stripe/react-stripe-js";
import { React   } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";

import { useState } from "react"

 
import Orders from "./components/Orders";


const App = () => {
  return (
    <div className="app">
      <Routes>
        
        <Route path="/" element={<> <Header /> <Home /></>} />
        
        <Route path="/checkout" element={<><Header /><Checkout /></>}/>
  
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
       
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
 
 


 
 