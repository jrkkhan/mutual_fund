import React  from "react";
import Sidebar from './Sidebar'; 

const Message =() => {

const messagedata =[
{
"icon": `warning`,
"heading":`waring Message`,
"text": `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
"iconcolor": `bg-yellow-200 text-yellow-500`,
},
{
"icon": `chat`,
"heading":`info Message`,
"text": `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
"iconcolor": `bg-blue-200 text-blue-500`,
},
{
"icon": `tag_faces`,
"heading":`good Message`,
"text": `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
"iconcolor": `bg-green-200 text-green-500`,
},
{
"icon": `dangerous`,
"heading":`alert Message`,
"text": `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
"iconcolor": `bg-red-200 text-red-500`,
},
]

 

return(
<>
<body className="  bg-gray-100 lg:flex">
  <Sidebar />
  <main className="w-full">
    {/* main work*/}
    <div className=" h-full overflow-y-auto capitalize p-6">
      {/* heading */}
      <div>
        <h1 className="py-4 text-lg font-medium">Notifications</h1>
       
      </div>
      
      <div className="w-full space-y-4">
        {
        
        messagedata.map((elem) =>{
        const {icon, heading, text, iconcolor } = elem;
        return(
        <div className="bg-white p-4 rounded-lg flex justify-between items-start">
          <span className={ iconcolor + " material-icons p-2  rounded-full"}>{icon}</span>
          <div className="ml-4">
            <h1>{heading}</h1>
            <p className="text-sm text-gray-500">{text}</p>
          </div>
          <span className="material-icons text-gray-500 m-4  hover:bg-gray-100 rounded-full p-1 transition duration-200">close</span>
        </div>
        )
        })
        }
        
      </div>
    </div>
    {/*  */}
  </main>
  {/*end  */}
  
</body>
</>
);
};
export default Message;