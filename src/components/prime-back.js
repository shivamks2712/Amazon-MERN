import React from "react";
import './prime-back.css'
import Product from "./product";
const Prime =()=>{
    
return(
  <div>
    <div className='prime-img'>
        <div className="prime-link">
          <br/>
        </div> 
    </div>
        <div className="container-mid">
          <div className="container two-item">
             <Product 
               id='0'
              title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD)"
              imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41CED+NsupL._AC_SX184_.jpg"
              rating={3} 
              price={985.6}/>
             <Product
               id='1'
               title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
               imgUrl="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
               rating={4}
               price={1024.75}/>
           </div>   
           <div className="container-fluid three-item">
             
               <Product 
               id='2'
               title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
               imgUrl="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
               rating={4}
               price={1024.75}/>

               <Product
               id='3'
               title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
               imgUrl="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
               rating={4}
               price={1024.75}/>
             
              <Product 
              id='4'
              title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD)"
              imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41CED+NsupL._AC_SX184_.jpg"
              rating={3} 
              price={985.6}/>
           </div>
           <div className="container-fluid single-item">
           <Product 
               id='5'
              title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart Android LED TV KD-43X75
               (Black) (2021 Model) | with Alexa Compatibility"
              imgUrl="https://images.samsung.com/is/image/samsung/in-qled8k-q800t-qa75q800takxxl-272387927?$684_547_PNG$"
              rating={4} 
              price={1560.72}/>

           </div>
      </div>
   </div>
)
}
export default Prime;