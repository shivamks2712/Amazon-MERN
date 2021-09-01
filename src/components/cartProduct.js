import React from "react";
import { useStateValue } from "../StateProvider";
import Card from '@material-ui/core/Card';

const CartProduct=({rating,price,title,imgUrl,id})=>{
const [state,dispatch] =useStateValue();
const removeFromCart=()=>{
    dispatch({
        type:'ON_CART_REMOVE',
        id: id
        
    });

    }
    
        return <div className="product">
        <p>{title}</p>
        <p>  <strong>Price: </strong>
            <small>  $ </small>
            <strong>{price}</strong>
        </p>
      <div className="product-rating"> 
     
      <strong className="product-rating"> { 
       Array(rating).fill().map((_,i )=>( 
        <small key={i}> ⭐</small> 
       ))}</strong>
       </div>  
       <img className="product-image" src={imgUrl} alt="" />
          <button onClick={removeFromCart}  className="add-to-basket">Remove </button>
     </div>  
}


export default CartProduct