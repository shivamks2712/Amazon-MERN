import React from "react";
import { useStateValue } from "../StateProvider";
import './product.css';


function Product({rating,price,title,imgUrl,id}){
const [state,dispatch] =useStateValue();
let repeat = (Math.random())*100;
 const onCartAdd =()=>{
   
    dispatch({
      type: 'ON_CART_ADD',
      description:{id:id + repeat,
       rating:rating,
       title:title,
       price:price,
       imgUrl:imgUrl
      }
    })
    repeat++;
  }

return<div className="product">
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
          <button onClick={onCartAdd}  className="add-to-basket">Add To Basket</button>
     </div>
}
export default Product;