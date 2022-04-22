import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import jQuery from 'jquery';
import { NavLink } from 'react-router-dom';
import Stockdetails from './Stockdetails';

const FreeTrading =() => {
const amountcarddata =[
{
"icon": `account_balance`,
"amountdata": `5400 ₹`,
"subheading":`Tata Power`,
"Daychange":`+15.65 (2.29%)`,
},
{
"icon": `attach_money`,
"amountdata": `400 ₹`,
"subheading":`Total Interest`,
"Daychange":`+15.65 (2.29%)`,
},
{
"icon": `trending_up`,
"amountdata": `200 ₹`,
"subheading":`Founder Profit`,
"Daychange":`+15.65 (2.29%)`,
},
{
"icon": `trending_up`,

"amountdata": `200 ₹`,
"subheading":`Founder Profit`,
"Daychange":`+15.65 (2.29%)`,
},
{
"icon": `trending_up`,

"amountdata": `200 ₹`,
"subheading":`Founder Profit`,
"Daychange":`+15.65 (2.29%)`,
},
]

const [openModal, setOpenModal] = React.useState(false);

const [filterOpen, setfilterOpen] = React.useState(false);
const keywords =[
{"name": `Mutual Fund`,},{"name": `IPO`,},{"name": `2 Month`,},{"name": `1 Year`,},{"name": `complete`,},{"name": `Progress`,},{"name": `Close`,},{"name": `4% Return `,},
{"name": `24% Return`,},
]
return(
<>
<body className="lg:h-screen bg-gray-100 lg:flex">
  <Sidebar />
  <main className="w-full">
    {/* main work*/}
    <div className=" h-full overflow-y-auto capitalize p-6">
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
          <NavLink className="bg-blue-500 py-2 px-5 text-white rounded-lg hover:shadow-lg transition duration-200 cursor-pointer flex items-center transform scale-100 hover:scale-105 " exact to="/clientform">
            <span className="material-icons">add</span> <p className="ml-2 whitespace-nowrap">Add Client</p>
          </NavLink>
        </div>
        {/* drop down */}
        <div className= {"absolute top-16 border-t   left-0 w-full bg-white shadow-xl p-6 rounded-lg z-20" +  (filterOpen ? "flex" : " hidden ") } >
          <h1 className="font-medium text-sm text-gray-500 pb-4">Keyword</h1>
          <div className="flex flex-wrap text-sm text-gray-500 font-medium gap-4">
            {
            keywords.map((elem) => {
            const { name } = elem;
            return(
            <div onClick={() => setfilterOpen(!filterOpen)} className="px-4 py-1  bg-gray-100 rounded-sm cursor-pointer hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap transition duration-100">{name}</div>
            )
            })
            }
            
          </div>
        </div>
        {/* drop down end */}
      </div>
      {/* heading */}
      <div className="">
        <h1 className="py-4 text-lg font-medium mt-4">Top Gainer</h1>
      </div>
      {/* three boxes */}
      <div className="grid lg:grid-cols-5 md:grid-cols-2  gap-4 mb-4 ">
        {/*box 1  */}
        {
        amountcarddata.map((elem)=> {
        const {icon, subcolor, amountdata, subheading, Daychange} = elem;
        return(
        <div onClick= {() => setOpenModal(true)} className={"bg-white p-4 rounded-md space-y-2 flex items-start space-x-2 cursor-pointer"}>
          {/* icon */}
          <span className={ "bg-black bg-opacity-10 material-icons  p-4 rounded-full text-white"} style={{fontSize: '1rem'}}>{icon}</span>
          <div className="w-full space-y-2">
            <p className="text-sm font-medium text-gray-800 truncate">{subheading}</p>
            <div> <h1 className="text-sm font-medium text-gray-600">{amountdata}</h1>
              <p className="text-sm text-green-400">{Daychange}</p></div>
            </div>
          </div>
          )
          })
          }
        </div>
        {/* heading */}
        <div className="">
          <h1 className=" py-4 text-lg font-medium">Top Losers</h1>
        </div>
        {/* three boxes */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2  gap-4 mb-4 ">
          {/*box 1  */}
          {
          amountcarddata.map((elem)=> {
          const {icon, subcolor, amountdata, subheading, Daychange} = elem;
          return(
          <div  onClick= {() => setOpenModal(true)} className={"bg-white p-4 rounded-md space-y-2 flex items-start space-x-2 cursor-pointer"}>
            {/* icon */}
            <span className={ "bg-black bg-opacity-10 material-icons  p-4 rounded-full text-white"} style={{fontSize: '1rem'}}>{icon}</span>
            <div className="w-full space-y-2">
              <p className="text-sm font-medium text-gray-800 truncate">{subheading}</p>
              <div> <h1 className="text-sm font-medium text-gray-600">{amountdata}</h1>
                <p className="text-sm text-green-400">{Daychange}</p></div>
              </div>
            </div>
            )
            })
            }
          </div>
          {/* heading */}
          <div className="">
            <h1 className=" py-4 text-lg font-medium capitalize">mutual Funds</h1>
          </div>
          {/* component */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  mb-4">
            {/* card 1 */}
            <div onClick= {() => setOpenModal(true)} className="bg-white w-full  rounded-lg p-6 cursor-pointer">
              <div className="w-10 h-10 rounded-md bg-gray-100"> </div>
              <div className="space-y-1 mt-4">
                <h1 className="font-medium capitalize text-base">ICIC prudential mutual fund </h1>
                <div className="flex space-x-4 text-sm font-medium text-gray-700"><p className="capitalize">Very hight risky</p>
                <p className="capitalize">equity</p>
                <p className="capitalize">Small cap</p></div>
              </div>
              <div className=" py-2 mt-4">
                <div className="flex items-end space-x-2"> <h1 className="text-lg font-semibold text-gray-800  "> 12.16% </h1>
                  <p className="text-sm">6m return</p></div>
                  <p className="flex items-center text-green-400 space-x-2 text-sm">
                    <span className="material-icons text-base ">call_made</span>  1.23%</p> </div>
                    <div className="w-full px-4 text-center h-36 bg-blue-50">
                      
                    </div>
                    <div className=" mt-12 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Nav 10-feb-2022 </p>
                        <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 capitalize">rating</p>
                        <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Min SIP amount </p>
                        <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">fund size </p>
                        <h1 className="text-gray-800 font-semibold">₹ 8,032 Cr</h1>
                      </div>
                      
                    </div>
                  </div>
                  {/* card 2 */}
                  <div onClick= {() => setOpenModal(true)} className="bg-white w-full  rounded-lg p-6 cursor-pointer">
                    <div className="w-10 h-10 rounded-md bg-gray-100"> </div>
                    <div className="space-y-1 mt-4">
                      <h1 className="font-medium capitalize text-base">ICIC prudential mutual fund </h1>
                      <div className="flex space-x-4 text-sm font-medium text-gray-700"><p className="capitalize">Very hight risky</p>
                      <p className="capitalize">equity</p>
                      <p className="capitalize">Small cap</p></div>
                    </div>
                    <div className=" py-2 mt-4">
                      <div className="flex items-end space-x-2"> <h1 className="text-lg font-semibold text-gray-800  "> 12.16% </h1>
                        <p className="text-sm">6m return</p></div>
                        <p className="flex items-center text-green-400 space-x-2 text-sm">
                          <span className="material-icons text-base ">call_made</span>  1.23%</p> </div>
                          <div className="w-full px-4 text-center h-36 bg-blue-50">
                            
                          </div>
                          <div className=" mt-12 grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Nav 10-feb-2022 </p>
                              <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700 capitalize">rating</p>
                              <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">Min SIP amount </p>
                              <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">fund size </p>
                              <h1 className="text-gray-800 font-semibold">₹ 8,032 Cr</h1>
                            </div>
                            
                          </div>
                        </div>
                        {/* card 3 */}
                        <div onClick= {() => setOpenModal(true)} className="bg-white w-full  rounded-lg p-6 cursor-pointer">
                          <div className="w-10 h-10 rounded-md bg-gray-100"> </div>
                          <div className="space-y-1 mt-4">
                            <h1 className="font-medium capitalize text-base">ICIC prudential mutual fund </h1>
                            <div className="flex space-x-4 text-sm font-medium text-gray-700"><p className="capitalize">Very hight risky</p>
                            <p className="capitalize">equity</p>
                            <p className="capitalize">Small cap</p></div>
                          </div>
                          <div className=" py-2 mt-4">
                            <div className="flex items-end space-x-2"> <h1 className="text-lg font-semibold text-gray-800  "> 12.16% </h1>
                              <p className="text-sm">6m return</p></div>
                              <p className="flex items-center text-green-400 space-x-2 text-sm">
                                <span className="material-icons text-base ">call_made</span>  1.23%</p> </div>
                                <div className="w-full px-4 text-center h-36 bg-blue-50">
                                  
                                </div>
                                <div className=" mt-12 grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-gray-700">Nav 10-feb-2022 </p>
                                    <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-700 capitalize">rating</p>
                                    <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-700">Min SIP amount </p>
                                    <h1 className="text-gray-800 font-semibold">₹ 60.32</h1>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-700">fund size </p>
                                    <h1 className="text-gray-800 font-semibold">₹ 8,032 Cr</h1>
                                  </div>
                                  
                                </div>
                              </div>
                              {/* grid close */}
                            </div>
                            <style dangerouslySetInnerHTML={{__html: "\n    .table {\n        border-spacing: 0 15px;\n    }\n\n    i {\n        font-size: 1rem !important;\n    }\n\n    .table tr {\n        border-radius: 20px;\n    }\n\n    \n" }} />
                          </div>
                          {/*  */}
                        </main>
                        {/*end  */}



            </body>

             { openModal && <Stockdetails closeModal = {setOpenModal} />}
            </>
            );
            };



            export default FreeTrading;