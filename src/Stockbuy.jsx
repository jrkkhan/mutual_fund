import React from 'react';


  function Stockbuy({ closeModal }) {

return(
                        <>
                        {/*Buy section*/}
                        <div className="fixed right-0 top-0 h-screen w-96 bg-white shadow-lg hidden">
                          <header className="h-16 border-b px-4 flex justify-between items-center sticky top-0 overflow-y-auto relative">
                            <h1 className="capitalize text-base font-medium">real touch LTD</h1>
                            <span className="material-icons p-2 hover:bg-gray-100 rounded-full transition duration-200 ">close </span></header>
                            <div className="p-6 space-y-4 ">
                              {/*1*/}
                              <div className="flex justify-between">
                                <div className="flex"><p className="font-normal">Type <span className="font-medium">Dilvery</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2 items-center"><p className="capitalize text-sm">share available</p> <p className="font-medium">0</p></div>
                              </div>
                              {/*2*/}
                              <div className="flex justify-between items-center">
                                <div className="flex"><p className="font-normal">Qty <span className="font-medium">BSE</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2"><input type="text" name="" id="" className="w-28 p-2 bg-gray-100 focus:outline-none text-right rounded-lg"/></div>
                              </div>
                              {/*3*/}
                              <div className="flex justify-between items-center">
                                <div className="flex"><p className="font-normal">Price <span className="font-medium">Limit</span> </p> <span className="material-icons">expand_more</span></div>
                                <div className="flex space-x-2"><input type="text" name="" id="" className="w-28 p-2 bg-gray-100 focus:outline-none text-right rounded-lg"/></div>
                              </div>
                              <div className="text-center space-y-4 absolute bottom-40 left-0 flex flex-col items-center w-full px-6">
                                <p className="text-sm text-gray-500">Order will be excuted at ₹ 785.20 or lower price. </p>
                              <button className="bg-green-400 text-white w-full p-3 rounded-lg uppercase font-medium transition duration-200 hover:bg-green-500 shadow-md shadow-green-100">buy</button></div>
                            </div>
                            
                          </div>


   </>
);
};
export default Stockbuy; 
