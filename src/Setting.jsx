import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar'; 
 const Setting =() => {
  return(
<>
<body className="lg:h-screen bg-gray-100 lg:flex">

<Sidebar />

  <main className="w-full">
        {/* main work*/}
          {/* component */}
      <div className="h-full overflow-y-auto capitalize p-6 ">
        
          <div>
            <h2 className="text-lg font-medium">Setting</h2>
            <p className="text-gray-500 mb-6 text-sm">here you can edit admin photo, sub title and loign password.</p>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                <img src="https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg" className="lg:w-4/6 md:mx-0 mx-auto w-3/6 md:rounded-none rounded-full  lg:mb-0 mb-6"/>
                 
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <label  >Full Name</label>
                      <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-1"  placeholder="Juber abbas" />
                    </div>
                     <div className="md:col-span-2">
                      <label  >Sub title</label>
                      <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-1"   placeholder="Manager" />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Login Id</label>
                      <input type="text"   className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-1"   placeholder="email@domain.com" />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="address">password</label>
                      <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-1"   placeholder="12345@Aabc" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="city">Confirm password</label>
                      <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-1"   placeholder="12345@Aabc" />
                    </div>
                 
                 
                    <div className="md:col-span-5 lg:text-right text-left mt-6">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Submit</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </div>
      </main>
      {/*end  */}
 
</body>
</>
    );

 };

 export default Setting;
