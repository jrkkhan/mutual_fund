import React from "react";
import Sidebar from './Sidebar';

const Clientform =() => {
return(
<>
<body className="h-screen bg-gray-100 flex">
  <Sidebar />
  <main className="w-full">
    {/* main work*/}
    <div className=" h-full overflow-y-auto capitalize p-6">
      {/* heading */}
      <div>
        <h1 className="py-4 text-lg font-medium">Client form</h1>
      </div>
      {/* component */}
      {/* This is an example component */}
      <section className="text-gray-600 body-font  m-0 p-0 relative" />
        <div className="container    mx-auto">
          <div className="flex flex-col text-center w-full mb-1">
          </div>
          <div className="mt-10 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-2 py-8 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Full name
                      </label>
                      <input type="text" name="first-name" placeholder="Juber abbas" id="first-name" autoComplete="given-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Mobile
                      No</label>
                      <input type="text" name="last-name" placeholder="+91 63785 86370" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Account No
                      </label>
                      <input type="text" name="last-name" placeholder={208510100000} id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      IFSC code</label>
                      <input type="text" name="last-name" placeholder="UBIN01020" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      UPI ID</label>
                      <input type="text" name="last-name" placeholder="Paytm@456320" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Amount</label>
                      <input type="text" name="last-name" placeholder="Minimum 5000" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Category</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Funds</option>
                        <option>IPO</option>
                        <option>Crypto</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Interest Rate</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>4 % </option>
                        <option>8 %</option>
                        <option>24 %</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Time Priod</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>2 Month</option>
                        <option>6 Month</option>
                        <option>1 years</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Eduacted status</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option> Educated</option>
                        <option>Non educated</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Start date</label>
                      <input type="text" name="last-name" id="last-name" placeholder="9/10/2021" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      End date</label>
                      <input type="text" name="last-name" placeholder="9/12/2021" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      State </label>
                      <input type="text" name="last-name" placeholder="Rajsthan" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      City</label>
                      <input type="text" name="last-name" placeholder="Jaipur" id="last-name" autoComplete="family-name" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Address
                      description</label>
                      <input type="text" name="email-address" placeholder="1- 334343434 It should be an editor to fill the job description of around 5 to 10 Lines ." id="email-address" autoComplete="email" className="mt-1  block w-full   sm:text-sm border-b focus:outline-none py-0.5" />
                    </div>
                  </div>
                  <fieldset className="mt-8 ">
                    <legend className=" text-base  text-1.5xl font-medium text-gray-900">Investment Reason</legend>
                    <div className="mt-2 space-y-4">
                      <div className="flex place-items-center">
                        <div className="flex items-center h-5">
                          <input id="saving" name="saving" type="checkbox" className="focus:ring-indigo-500 cursor-pointer h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="saving" className="font-regular text-gray-700 cursor-pointer">Saving</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="future" name="future" type="checkbox" className="focus:ring-indigo-500 cursor-pointer h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="future" className="font-regular text-gray-700 cursor-pointer">Future</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="buying" name="buying" type="checkbox" className="focus:ring-indigo-500 cursor-pointer h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="buying" className="font-regular text-gray-700 cursor-pointer">Buying</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="debt" name="debt" type="checkbox" className="focus:ring-indigo-500 cursor-pointer h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="debt" className="font-regular text-gray-700 cursor-pointer">Debt</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="personal" name="personal" type="checkbox" className="focus:ring-indigo-500 cursor-pointer h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="personal" className="font-regular text-gray-700 cursor-pointer">Personal
                          </label>
                        </div>
                      </div>
                    </div></fieldset>
                  </div>
                  <div className="px-4 py-3 bg-white text-right sm:px-4">
                    <button type="submit" className="mr-4 inline-flex justify-center w-24 py-2 px-4 border border-transparent  text-sm font-medium rounded-md   text-gray-500  0 focus:outline-none ">
                    Cancle
                    </button>
                    <button type="submit" className="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md   bg-blue-500 hover:bg-blue-600 text-white focus:outline-none   ">
                    Save
                    </button>
                  </div>
                </div>
              </form></div>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className />
                </div>
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
        export default Clientform;