import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';


const Clients = () => {
  const keywords = [
    { "name": `Mutual Fund`, }, { "name": `IPO`, }, { "name": `2 Month`, }, { "name": `1 Year`, }, { "name": `complete`, }, { "name": `Progress`, }, { "name": `Close`, }, { "name": `4% Return`, },
    { "name": `24% Return`, },

  ]
  const clienttabledata = [
    { "heads": `Clients Name/ Email`, },
    { "heads": `Category`, },
    { "heads": `Amount`, },
    { "heads": `Int. rate`, },
    { "heads": `Cur. rate`, },
    { "heads": `time period`, }, { "heads": `Status`, }, { "heads": `Action`, },
  ]
  const clientdata = [
    {
      "id": '1',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dexit`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `1 Year`,
      "clientstatus": `complete`,
      "clientstatuscolor": `bg-green-400`,
    },
    {
      "id": '2',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dean Lynch`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `1 Year`,
      "clientstatus": `Close`,
      "clientstatuscolor": `bg-red-400`,
    },
    {
      "id": '3',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dean Lynch`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `1 Year`,
      "clientstatus": `Progress`,
      "clientstatuscolor": `bg-yellow-400`,
    },
    {
      "id": '4',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dean Lynch`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `1 Year`,
      "clientstatus": `Progress`,
      "clientstatuscolor": `bg-yellow-400`,
    },

    {
      "id": '5',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dean Lynch`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `4 year`,
      "clientstatus": `Progress`,
      "clientstatuscolor": `bg-yellow-400`,
    },

    {
      "id": '6',
      "clientphoto": "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
      "clientname": `Dean Lynch`,
      "clientemail": ` Mail@Rgmail.Com`,
      "category": `Mutual Fund`,
      "clienteamount": `5000`,
      "clientintrate": `24%`,
      "clienttimepeirod": `1 Year`,
      "clientstatus": `Progress`,
      "clientstatuscolor": `bg-yellow-400`,
    },
  ]
  let [showdropdown, handledropdown] = React.useState(0);
  let [inputText, handleTnputText] = React.useState('');
  function dropdown() {
    return (
      <div className="bg-white shadow-lg absolute right-8 top-12 w-28 rounded-md text-xs font-medium overflow-hidden z-10" >
        <div className="flex items-center px-4 py-2 hover:bg-blue-50 hover:text-blue-500"><span className="material-icons-outlined mr-2 text-sm">visibility</span> <p>Detail</p></div>
        <div className="flex items-center px-4 py-2  hover:bg-blue-50 hover:text-blue-500"><span className="material-icons-outlined mr-2 text-sm">edit</span> <p>edit</p></div>
        <div className="flex items-center px-4 py-2  hover:bg-blue-50 hover:text-blue-500"><span className="material-icons-outlined mr-2 text-sm">delete</span> <p>delete</p></div>
      </div>
    )
  }

  const [filterOpen, setfilterOpen] = React.useState(false);

  return (
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
                <input className="bg-transparent outline-none w-full"
                  onChange={(e) => handleTnputText(e.target.value)}
                  type="text" placeholder="Clients name or keyword..." />
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
              <div className={"absolute top-16 border-t   left-0 w-full bg-white shadow-xl p-6 rounded-lg z-20" + (filterOpen ? "flex" : " hidden ")} >
                <h1 className="font-medium text-sm text-gray-500 pb-4">Keyword</h1>
                <div className="flex flex-wrap text-sm text-gray-500 font-medium gap-4">
                  {
                    keywords.map((elem) => {
                      const { name } = elem;
                      return (
                        <div onClick={() => {setfilterOpen(!filterOpen);handleTnputText(name)}}   className="px-4 py-1  bg-gray-100 rounded-sm cursor-pointer hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap transition duration-100">{name}</div>
                      )
                    })
                  }

                </div>
              </div>
              {/* drop down end */}
            </div>
            {/* heading */}

            <h1 className="pt-8 text-lg font-medium">Clients List</h1>


            {/* component */}
            <div className="w-full  overflow-hidden overflow-x-auto">
              <table className="table text-gray-400 border-separate space-y-6 text-sm w-full mb-20">
                <thead className="bg-gray-100 text-gray-500">

                  <tr className="text-left bg-white">
                    {
                      clienttabledata.map((elem) => {
                        const { heads } = elem;
                        return (
                          <th className="p-3 whitespace-nowrap"> {heads} </th>
                        )
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {/*array function*/}
                  {
                    clientdata
                      // .filter((element)=>(element.clientname==="Dexit")) name.includes('bedroom')
                      .filter((element) => (inputText === "" || element.clientname.includes(inputText) || element.clienttimepeirod.includes(inputText)))
                      // "clienttimepeirod": `4 year`
                      .map((elem) => {
                        const { clientphoto, clientname, clientemail, category, clienteamount, clientintrate, clienttimepeirod, clientstatus, clientstatuscolor, id } = elem;

                        return (
                          <tr className="bg-white cursor-pointer whitespace-nowrap ">
                            <td className="p-3 ">
                              <div className="flex items-center">
                                <img className="rounded-full h-12 w-12  object-cover" src={clientphoto} alt="clientphoto" />
                                <div className="ml-3">
                                  <div className="text-gray-800 font-medium">{clientname}</div>
                                  <div className="text-gray-500">{clientemail}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-3">
                              {category}
                            </td>
                            <td className="p-3 font-bold">
                              {clienteamount}
                            </td>
                            <td className="p-3 font-bold">
                              {clientintrate}
                            </td>
                            <td className="p-3 ">
                              {clientintrate}
                            </td>
                            <td className="p-3 ">
                              {clienttimepeirod}
                            </td>
                            <td className="p-3">
                              <span className={clientstatuscolor + " text-gray-50 rounded-md px-2 py-0.5"}>{clientstatus}</span>
                            </td>
                            <td className="p-3 text-center relative">
                              <span onClick={() => handledropdown(showdropdown === id ? 0 : id)} className="material-icons text-gray-400 hover:bg-blue-50 p-2 rounded-full  relative" style={{ fontSize: '1rem', zIndex: 1 }}>more_vert</span>
                              {showdropdown === id ? dropdown() : null}
                            </td>
                          </tr>
                        )
                      })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {/*end  */}

      </body>
    </>
  );
};
export default Clients;

