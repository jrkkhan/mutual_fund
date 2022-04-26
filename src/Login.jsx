import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
 import { NavLink } from 'react-router-dom';

const Login =() => {
 
 const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);

  };



 

return(
<>
<body className=" bg-gray-100 flex justify-center items-center h-screen">
  <div>
    <div className="shadow-xl p-10 bg-white max-w-xl rounded-lg mb-10">
      <div className="flex justify-center mb-8"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" className="w-24" /></div>
      <h1 className="text-2xl font-black mb-4  ">Login</h1>

        <div className="label-float mb-4">
        <input type="text" placeholder=" " className="border appearance-none rounded w-full px-3 py-3 transition duration-200 focus:ring-1 focus:outline-none active:outline-none active:border-indigo-600" />
        <label className="px-3 text-gray-400 text-sm">Username</label>
      </div>
 
      <div className="label-float mb-4">
        <input type="text" placeholder=" " className="border appearance-none rounded w-full px-3 py-3 transition duration-200 focus:ring-1 focus:outline-none active:outline-none active:border-indigo-600"
         name="password"  type={passwordShown ? "text" : "password"} autofocus/>
        <label className="px-3 text-gray-400 text-sm">Password</label>
        <i className="material-icons-outlined absolute right-4 top-6 cursor-pointer text-lg text-gray-500" onClick={togglePassword}>visibility</i> 
        <p className="text-xs text-gray-500 py-2 cursor-pointer text-blue-500 transition duration-200 capitalize">Forgot password</p>

      </div>

       
     
      <NavLink exact to="/" type="button" value="Login" id="submit" onclick="validate()" className="bg-blue-500 text-white text-center font-medium py-3 px-6 rounded w-full hover:bg-blue-600 transition duration-200">Submit</NavLink> 
    </div>
  </div>
  
</body>
</>
);
};

export default Login;