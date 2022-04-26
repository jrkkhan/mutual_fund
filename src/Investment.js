import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import jQuery from 'jquery';
import { NavLink } from 'react-router-dom';
import Stockdetails from './Stockdetails';
const Investment = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [filterOpen, setfilterOpen] = React.useState(false);
  const keywords = [
    { "name": `Mutual Fund`, }, { "name": `IPO`, }, { "name": `2 Month`, }, { "name": `1 Year`, }, { "name": `complete`, }, { "name": `Progress`, }, { "name": `Close`, }, { "name": `4% Return `, },
    { "name": `24% Return`, },
  ]
  return (
    <>
      <body className="lg:h-screen bg-gray-100 lg:flex">
        <Sidebar />
        <main className="w-full">
          {/* main work*/}
          <div className=" h-full overflow-y-auto capitalize p-6 space-y-6">
            {/* seacrch and filter */}
            <div className="sticky top-0 md:flex md:space-y-0 space-y-4 items-center justify-between  md:bg-white bg-transparent rounded-lg md:shadow-lg md:px-4 py-1 relative w-full h-16">
              <div className="flex md:bg-transparent bg-white md:p-0 p-3  w-full space-x-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className="bg-transparent outline-none w-full" type="text" placeholder="Search stocks, option or mutual funds..." />
              </div>
              <div className="flex items-center md:w-auto w-full md:justify-end justify-between">
                <div onClick={() => setfilterOpen(!filterOpen)} className="flex items-center py-3 px-4 rounded-lg text-gray-500  cursor-pointer">
                  <span className="material-icons text-lg">filter_list</span>
                  <span className="ml-2"> Filter</span>
                </div>

              </div>
              {/* drop down */}
              <div className={"absolute top-16 border-t   left-0 w-full bg-white shadow-xl p-6 rounded-lg z-20" + (filterOpen ? "flex" : " hidden ")} >
                <h1 className="font-medium text-sm text-gray-500 pb-4">Keyword</h1>
                <div className="flex flex-wrap text-sm text-gray-500 font-medium gap-4">
                  {
                    keywords.map((elem) => {
                      const { name } = elem;
                      return (
                        <div onClick={() => setfilterOpen(!filterOpen)} className="px-4 py-1  bg-gray-100 rounded-sm cursor-pointer hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap transition duration-100">{name}</div>
                      )
                    })
                  }

                </div>
              </div>
              {/* drop down end */}
            </div>
            {/* heading */}
            <div className="flex items-center justify-between">
              <h1 className=" text-lg font-medium "> Portfolio (4)</h1> <span className="text-sm font-medium text-blue-500">View all orders</span>
            </div>

            {/* total portfolio boxes */}
            <div className="flex itmes-center bg-white p-4 rounded-md space-y-2  w-full  cursor-pointer   justify-center space-x-20  divide-x ">
              <div>
                <h1 className="text-2xl font-semibold">₹ 40,000</h1>
                < p>current Value</p>
                </div>

              <div className="px-10 space-y-2 font-medium">
                <div className="flex itmes-center space-x-8"><p>invested value</p> <p>40,000</p></div>
                <div className="flex itmes-center space-x-8"><p>Total return  </p> <p className="text-red-500">-315 (0.78%)</p></div>
                <div className="flex itmes-center space-x-8"><p>1d return</p> <p className="text-green-500">+501 (1.44%)</p></div>
              </div>

            </div>

            {/* table of shares */}

            <table className="w-full border bg-gray-50 divide-y">
              <tr className="">
                <th className="text-left p-3 font-medium">Company</th>
                <th className="text-right p-3 font-medium">Market price</th>
                <th className="text-right p-3 font-medium">return</th>
                <th className="text-right p-3 font-medium">current</th>
                <th className="text-right p-3 font-medium"> </th>
              </tr>

              <tr className="">
                <td className="p-3 space-y-2">
                  <p className="font-medium">Ruchi soya</p>
                  <div className="text-sm"><b className="text-blue-500 font-medium">11</b> shares @ 1020</div></td>

                <td className="p-3 space-y-2 text-right">
                  <p className="font-medium">₹1035</p>
                  <div className="text-sm text-green-500"> 75 (2.5%)</div>
                </td>
                <td className="p-3 space-y-2 text-right"><p className="font-medium">+₹1035</p>
                  <div className="text-sm text-green-500"> 1.16%</div>
                </td>
                <td className="p-3 space-y-2 text-right">
                  <p className="font-medium">₹11035</p>
                  <p className="text-sm">₹11,526</p></td>
                  
                  <td className="text-right pr-10"> <span className="material-icons p-2 rounded-full bg-gray-100 hover:bg-gray-200">more_vert</span></td>
              </tr>

            </table>






          </div>
          {/*  */}
        </main>
        {/*end  */}
      </body>
      {openModal && <Stockdetails closeModal={setOpenModal} />}
    </>
  );
};
export default Investment;