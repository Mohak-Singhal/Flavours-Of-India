import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();
   // State to hold the total amount
   const [total, setTotal] = useState(0);

   // Use effect to calculate total when cartItems change
   useEffect(() => {
     const fetchTotalAmount = async () => {
       const amount = await getTotalCartAmount(); // Await the asynchronous function
       setTotal(amount); // Set the total state with the fetched amount
     };
 
     fetchTotalAmount(); // Call the function
   }, [cartItems, getTotalCartAmount]);

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
              {
                return(
                  <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]}</p>
                 
                    <p className='close-button' onClick={()=>removeFromCart(item._id)}>X</p>
                  </div>
                  
                  <hr/>
                  </div>
                  

                )
              }
            
          })}
        </div>
        <div className="cart-bottom">
                    <div className="cart-total">
                      <h2>Cart Total</h2>
                      <div>
                        <div className="cart-total-details">
                          <p>Sub total</p>
                          {/* <p>{total}</p> */}
                          </div>
                          <hr />
                       
                        <div className="cart-total-details">
                          <p>Delivery fee</p>
                          <p>{getTotalCartAmount()===0?0:50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Total</p>
                          <p>{total === 0?0 : total +50}</p>
                        </div>
                        
                       
                      </div>
                      <button onClick={()=>navigate("/order")}>Proceed to checkout</button>
                      
                    </div>
                    <div className="cart-promocode">
                      <div>
                        <p>if you have promo code, Enter it here </p>
                        <div className="cart-promocode-input">
                          <input type="text" name="" id="" />
                          <button>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
      </div>
      
    </div>
  )
}

export default Cart
