import React from 'react';
 


 
  function Stockdetails({ closeModal }) {

                      return(
                        <>
                          {/*stock details section*/}
                          <div className="fixed right-0 top-0 h-screen w-96 bg-white shadow-lg overflow-y-auto">
                            <header className="h-16 border-b px-4 flex justify-between items-center sticky top-0  relative bg-white">
                              <div className="flex items-center space-x-4"> 
                               <span onClick= {() => closeModal(false)} className="material-icons p-2 bg-gray-100 rounded-full transition duration-200 ">arrow_back </span>
                            <h1 className="capitalize text-base font-medium">real touch LTD</h1></div>
                            <div className="text-right">
                              <h1>365.60</h1>
                              <p className="text-xs text-green-500">-1.20 (3.21%)</p></div>
                            </header>
                            <div className="p-6 space-y-4 ">
                              {/*graph*/}
                              <div className="flex justify-between h-40 bg-green-100 w-full rounded-lg">
                                
                              </div>
                              {/*2*/}
                              <div className="w-full">
                                <h1 className="text-lg font-medium capitalize">performance</h1>
                                <div className="grid grid-cols-3 py-3 gap-4">
                                  <div><p className="text-sm font-medium ">Today's Low</p>
                                <h1>377.10</h1></div>
                                <div><p className="text-sm font-medium">Today's Low</p>
                              <h1>377.10</h1></div>
                              <div><p className="text-sm font-medium">Today's Low</p>
                            <h1>377.10</h1></div>
                            <div><p className="text-sm font-medium">Today's Low</p>
                          <h1>377.10</h1></div>
                          <div><p className="text-sm font-medium">Today's Low</p>
                        <h1>377.10</h1></div>
                        <div><p className="text-sm font-medium">Today's Low</p>
                      <h1>377.10</h1></div>
                    </div>
                  </div>
                  
                  <div className="text-center absolute bottom-0 left-0 flex flex-row items-center w-full px-6 bg-white py-4 space-x-4 border-t ">
                    <button className=" border border-green-400 text-green-400
                    w-full p-3 rounded-lg uppercase font-medium transition duration-200   shadow-md shadow-green-100">sell</button>
                    <button  className="bg-green-400 text-white w-full p-3 rounded-lg uppercase font-medium transition duration-200 hover:bg-green-500 shadow-md shadow-green-100">buy</button>
                  </div>
                </div>
              </div>

             
              </>



);
};

export default Stockdetails; 