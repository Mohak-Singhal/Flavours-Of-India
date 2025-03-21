import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
const LoginPopup = ({setShowLogin}) => {

  const {url,setToken}= useContext(StoreContext)


    const [currState, setCurrState] = useState("Sign Up")
     
    const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
    })
   
    const onChangeHandler=(event)=>{
      const name = event.target.name
      const value =event.target.value 
      setData(data=>({...data,[name]:value}))
    }
    const onLogin = async (event)=>{
      event.preventDefault()
      let newUrl =url;
      if(currState==="Login"){
        newUrl +="/api/user/login"
      }else{
        newUrl +="/api/user/register"
      }

      const response =await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }

    }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currState==="Login"?<></>:<input type="text" name="name"  onChange={onChangeHandler} value={data.name} placeholder='Your name' required />}
              
              <input name="email" type="email" onChange={onChangeHandler} value={data.email} placeholder='Your email' required />
              <input name="password" type="password" onChange={onChangeHandler} value={data.password} placeholder='Password' required />
              <button  type='submit' >{currState==="Sign Up"? "Create Account":"Login"}</button>
              <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing I agree to the terms of use and privacy policy</p>
                {currState==="Login"
                ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have a account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
              </div>
            </div>
        </form>
    </div>
  )
}

export default LoginPopup

// import React, { useState } from 'react';
// import "./LoginPopup.css";
// import { assets } from '../../assets/assets';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Sign Up");

//     const handleCloseClick = () => {
//         console.log("Close button clicked"); // Debugging line
//         setShowLogin(false);
//     };

//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container'>
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img
//                         onClick={handleCloseClick}
//                         src={assets.cross_icon}
//                         alt="Close"
//                         style={{ cursor: 'pointer' }} // Ensure the cursor changes to pointer on hover
//                     />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? null : <input type="text" placeholder='Your name' required />}
//                     <input type="email" placeholder='Your email' required />
//                     <input type="password" placeholder='Password' required />
//                     <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
//                     <div className="login-popup-condition">
//                         <input type="checkbox" required />
//                         <p>By continuing I agree to the terms of use and privacy policy</p>
//                         {currState === "Login"
//                             ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                             : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                         }
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LoginPopup;
