import React  from "react";
import Sidebar from './Sidebar';
 


const Home =() => {
const amountcarddata =[
{
"icon": `account_balance`,
"bgcolor": `bg-green-400`,
"amountdata": `5400 ₹`,
"subheading":`Current balance`,
},
{
"icon": `attach_money`,
"bgcolor": `bg-yellow-400`,
"amountdata": `400 ₹`,
"subheading":`Total Interest`,
},
{
"icon": `trending_up`,
"bgcolor": `bg-blue-400`,
 
"amountdata": `200 ₹`,
"subheading":`Founder Profit`,
},
]
  

return(
<>
<body className="lg:h-screen bg-gray-100 lg:flex">
  <Sidebar />
  <main className="w-full">
    {/* main work*/}
    <div className=" h-full overflow-y-auto capitalize p-6">
      {/* three boxes */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4 mb-4">
        {/*box 1  */}
        {
        amountcarddata.map((elem)=> {
        const {icon, bgcolor, amountdata, subheading} = elem;
        return(
        <div className={bgcolor + " p-6 flex  items-center rounded-md"}>
          {/* icon */}
          <span className={ "bg-black bg-opacity-10 material-icons lg:p-6 p-4 rounded-full text-white"} style={{fontSize: '2rem'}}>{icon}</span>
          <div className="text-center w-full"><h1 className="text-2xl font-medium text-white">{amountdata}</h1><p className="text-sm text-white">{subheading}</p></div>
        </div>
        )
        })
        }
      </div>
      {/* heading */}
      <div>
        <h1 className="py-4 text-lg font-medium">Amount Analytics</h1>
      </div>
      {/* component */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* card 1 */}
        <div className="bg-white w-full  rounded-lg p-6">
          <h1 className="font-semibold">Funds Performance</h1>
          <div className="flex items-center py-2 text-green-400 space-x-2"><span className="material-icons text-base ">call_made</span> <p>1.23%</p> </div>
          <div className="w-full px-4 text-center ">
            <div className="flex justify-center py-4 lg:pt-4 pt-8 space-x-4">
              <div className=" p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  5000
                </span> 
                <span className="text-sm text-gray-500">Invested</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  8%
                </span>
                <span className="text-sm text-gray-500">Percent</span>
              </div>
              <div className=" p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  400
                </span>
                <span className="text-sm text-gray-500">Returns</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="mb-2 text-blueGray-600 mt-10">
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              University of Computer Science
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-white w-full  rounded-lg p-6">
          <h1 className="font-semibold">IPO Performance</h1>
          <div className="flex items-center py-2 "> <img alt="stockimg" src="https://www.adityabirla.com/assets/images/logo.jpg" className="w-10" />
            <span className="text-sm ml-2 ">Aditya birla AMC</span></div>
            <div className="w-full px-4 text-center ">
              <div className="flex justify-center py-4 lg:pt-4 pt-8 space-x-4">
                <div className=" p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    30000
                  </span>
                  <span className="text-sm text-gray-500">Invested</span>
                </div>
                <div className=" p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    7
                  </span>
                  <span className="text-sm text-gray-500">Day Left</span>
                </div>
                <div className="p-3 text-center hidden">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    20%
                  </span>
                  <span className="text-sm text-gray-500">Percent</span>
                </div>
              </div>
            </div>
            <div className>
              <h1 className="font-semibold text-sm">Next target IPO</h1>
              {/* 1 */}
              <div className="flex justify-between items-center text-sm py-2">
                <div className="flex "> <img alt="stockimg" src="https://assetscdn1.paytm.com/frontendcommonweb/11272962.svg" className="w-10" /> <p className="ml-3 font-medium ">Paytm</p></div>
                <div className="text-gray-500">1 Oct 2021</div>
              </div>
              {/* 2 */}
              <div className="flex justify-between items-center text-sm py-2">
                <div className="flex "> <img alt="stockimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Policybazaar_Logo.gif/220px-Policybazaar_Logo.gif" className="w-10" /> <p className="ml-3 font-medium ">Policy bazaar</p></div>
                <div className="text-gray-500">25 Oct 2021</div>
              </div>
              {/* 3 */}
              <div className="flex justify-between items-center text-sm py-2">
                <div className="flex "> <img alt="stockimg" src="https://licindia.in/CorporateSiteDemo/media/LIC_Media/LIC_LOGO_1.png" className="w-10" /> <p className="ml-3 font-medium ">LIC</p></div>
                <div className="text-gray-500">5 nov 2021</div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-white w-full  rounded-lg p-6">
            <h1 className="font-semibold">Payable Amount</h1>
            <div className="flex items-center py-2 text-blue-400"> <span className="material-icons ">event</span> <p className="ml-2 text-sm">5 dec 2021</p></div>
            <div className="w-full px-4 text-center ">
              <div className="flex justify-center py-4 lg:pt-4 pt-8 space-x-4">
                <div className=" p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    5200
                  </span>
                  <span className="text-sm text-gray-500">Returns</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    4%
                  </span>
                  <span className="text-sm text-gray-500">Percent</span>
                </div>
                <div className=" p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    2
                  </span>
                  <span className="text-sm text-gray-500">Month left</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="mb-2 text-blueGray-600 mt-10">
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                University of Computer Science
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
  </>
  );
  };
  export default Home;