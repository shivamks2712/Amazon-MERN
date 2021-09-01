import React from "react";
import { useStateValue } from "../StateProvider";
import CartProduct from "./cartProduct";
import './cart.css';


function Cart(){
const [state,dispatch] =useStateValue();
let amount=0;
let buttonDisable='y';
if(state.basket.length){
   buttonDisable='';
}
const cartItems= state.basket.map((arg)=>{
      amount+= arg.price;
    return  <CartProduct title={arg.title} id={arg.id} price={arg.price} rating={arg.rating} imgUrl={arg.imgUrl} />
})
console.log(state.basket)
return <div className='cart-items'>
    <br/>
      <div className="container-fluid cart-total ">
          
          <div className='cart-total-left'>
           <img className='cart-image' src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
           <h1>Welcome to your Basket</h1>
           </div>
           
            <div className='cart-total-right'>

            <div className="ui cards">
         <div className="card">
    <div className="content"> 
        <center>
      <p><b>{ ` Subtotal( ${state.basket.length} items) : $`}</b>  <strong> {amount} </strong></p>
        <b><input type="checkbox" className='coupan-check' ></input> Deliever to saved adress </b>
        </center>
    </div>
    <div className="extra content">
        <center>
        <button className="proceed-to-checkout " disabled={buttonDisable} > Proceed to ChechOut</button>
        </center>
    </div>
  </div>
        </div>

            </div>
      </div>
 <div className="container three-item ">
    {cartItems}
</div></div>
}
export default Cart