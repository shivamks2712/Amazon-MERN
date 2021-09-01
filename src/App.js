import React, {useState,useEffect,useRef} from "react";
import Nav from "./components/navbar";
import Prime from'./components/prime-back';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cart from './components/Cart'

function App() {
   return ( 
     <Router>
          <div className="body">
      <Route exact path="/basket">
        <Nav className="nav-app"/>
        <Cart/>
        </Route>
        <Route exact path='/'>
               <Nav className="nav-app"/>
               <Prime/>  
        </Route>
         </div>
    </Router>
  );
}

export default App;
