import React from "react";
import './navbar.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import {Link} from 'react-router-dom';


function Nav(){
const [state,dispatch] =useStateValue();
const name='Alex';
let inCart= state.basket.length;


return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-body">
  <div className="container-fluid stickynav">
                                              {/* LOGO */}
  <Link to='/'  style={{ textDecoration: 'none' }}>   
  <img className="nav-amazon-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="refresh" />
    </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
                                                         {/* SEARCHBOX */}

    <div className=" collapse navbar-collapse  " id="navbarSupportedContent">
        
     <form className="d-flex nav-search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><SearchIcon></SearchIcon></button>
      </form>
    
        <div className="nav-mid-end">
      <ul className=" navbar-nav me-auto mb-2 mb-lg-0 nav-right ">
        <li className="nav-item nav-list">
          <span className="nav-span">Alex</span>
           <a className="nav-link active " aria-current="page" href='#'> Account </a>
            
        </li>
        </ul>
        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 nav-right ">
        <li className="nav-item nav-list">
        <span className="nav-span">Amazon</span>
          <a className="nav-link active" href="#">Prime</a>
        </li>
        </ul>
        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 nav-right ">
        <li className="nav-item nav-list">
        <span className="nav-span">Returns  </span>
          <a className="nav-link active" href="#">& My Order</a>
        </li>
        </ul>
        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 nav-right ">
        <li className="nav-item nav-list">
          <Link to='/basket'  style={{ textDecoration: 'none' }}>
           <span className="nav-span">Basket</span>
          <a className="nav-link active  cart" href="#"><AddShoppingCartIcon></AddShoppingCartIcon> <h6>{inCart}</h6> </a>
        </Link>
        </li>
      </ul>
     </div>
   </div>

  </div>
</nav>
   
)


}
export default Nav;