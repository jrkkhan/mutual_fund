import React, { useState } from "react";

  function Stockbuy({ closeModal }) {

     const [showText, setShowText] = useState("NSE");
     const [market, limit] = useState("Market");
     const [dilvery, intraday] = useState("Dilvery");
     const [num, percent] = useState("Num");

return(
                        <>
                        {/*Buy section*/}
                        <div className="fixed right-0 top-0 h-screen w-96 bg-white shadow-lg ">
                          <header className="h-16 border-b px-4 flex justify-between items-center sticky top-0 overflow-y-auto relative">
                           <div>
                              <h1 className="capitalize text-base font-medium">real touch LTD</h1>
                              <p className="text-sm">₹ 2812.55</p>
                           </div>
                            <span onClick={() => closeModal(false)} className="material-icons p-2 hover:bg-gray-100 rounded-full transition duration-200 ">close </span></header>
                            <div className="p-6 space-y-4 ">
                              {/*1*/}
                              <div className="flex justify-between">
                                <div onClick={() => intraday(dilvery==="Dilvery"?"Intraday":"Dilvery")} className="flex cursor-pointer"><p className="font-normal">Type <span className="font-medium">{dilvery}</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2 items-center"><p className="capitalize text-sm">share available</p> <p className="font-medium">0</p></div>
                              </div>
                              {/*2*/}
                              <div className="flex justify-between items-center">
                                <div onClick={() => setShowText(showText==="NSE"?"BSE":"NSE")} className="flex cursor-pointer"><p className="font-normal">Qty <span className="font-medium">{showText}</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2"><input type="text" name="" id="" className="w-28 p-2 bg-gray-100 focus:outline-none text-right rounded-md"/></div>
                              </div>
                              {/*3*/}
                              <div className="flex justify-between items-center">
                                <div onClick={() => limit(market==="Market"?"Limit":"Market")} className="flex cursor-pointer"><p className="font-normal">Price <span className="font-medium">{market}</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2"><input type="text" name="" id="" className="w-28 p-2 bg-gray-100 focus:outline-none text-right rounded-md"/></div>
                              </div>
                                {/*4*/}
                              <div className="flex justify-between items-center">
                                <div onClick={() => percent(num==="Num"?"Percent %":"Num")} className="flex"><p className="font-normal">Target Price <span className="font-medium">{num}</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2"><input type="text" name="" id="" className="w-28 p-2 bg-gray-100 focus:outline-none text-right rounded-md"/></div>
                              </div>
                            {/*5*/}
                            <div className="flex items-center justify-between text-sm  mt-4 capitalize">
                            <span className="text-blue-500">View more feature</span>
                              <div className="flex items-center space-x-1"><span className="material-icons-outlined ">account_balance_wallet</span><p>Blance</p><p>₹ 40,000</p></div>
                            </div>

   
 
   

                              <div className="text-center space-y-4 absolute bottom-40 left-0 flex flex-col items-center w-full px-6">
                                <p className="text-sm text-gray-500">Order will be excuted at ₹ 785.20 or lower price. </p>
                              <button className="bg-green-500 text-white w-full p-3 rounded-lg uppercase font-medium transition duration-200 hover:bg-opacity-90 shadow-md shadow-green-100">buy</button></div>
                            </div>
                            
                          </div>


   </>
);
};
export default Stockbuy; 
