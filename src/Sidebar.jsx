import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar =() => {
const sidebardata =[
{"path": `/`,"pagename": `Dashboard`,"icon": `home`, "addclass": `hidden`,},
{"path": `/clients`,"pagename": `Our Clients`,"icon": `people`, "addclass": `hidden`,},
{"path": `/FreeTrading`,"pagename": `Vartual Trading`,"icon": `equalizer`, "addclass": `hidden`,},
{"path": `/Message`,"pagename": `Message`,"icon": `email`, "addclass": `block`,},
{"path": `/Setting`,"pagename": `Setting`,"icon": `settings`, "addclass": `hidden`,},
]
return(
<>

{/*this is side bar  */}
<div className="lg:h-screen z-10  bg-white overflow-hidden overflow-y-auto xl:w-72 lg:w-16 capitalize shadow-lg flex lg:flex-col justify-between sticky top-0">
  <div className="lg:block flex justify-between w-full items-center lg:px-0 px-6">
    <div className="lg:text-center lg:w-4/6 lg:mx-auto lg:pb-4">
      <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" alt="admin" className="lg:mx-auto rounded-full lg:my-4 xl:w-20 xl:h-20 lg:w-10 lg:h-10 w-12 h-12 bg-blue-50 " />
      <h1 className="text-sm font-medium xl:block hidden">Juber abbas</h1>
      <p className="text-xs text-gray-500 xl:block hidden">Founder</p> </div>
      <div className="lg:py-4 text-gray-500 lg:block flex">
        {/* 1 */}
        {
        sidebardata.map((elem) => {
        const {path, pagename, icon, addclass, } = elem;
        return(
        <NavLink activeClassName="active" className="flex items-center hover:bg-blue-50 relative cursor-pointer transition duration-300 " exact to={path} >
          <div className="flex items-center lg:p-4 p-3 lg:w-16  lg:h-12 justify-center">
            <span className="material-icons p-2">{icon}</span>
          </div>
          <span className="text-sm lg:block hidden" >{pagename}</span>
          <span className={ addclass + " text-white absolute xl:right-4 lg:right-1 right-2.5   xl:w-5 xl:h-5 w-4 w-4 rounded-full inline-flex items-center justify-center font-light bg-red-500   "}
          style={{fontSize: '0.7rem'}}> 4</span>
        </NavLink>
        )
        })
        }
      </div>
    </div>
    <NavLink exact to="/Login" className="lg:flex items-center justify-center text-blue-500 my-6 hidden hover:text-red-500 cursor-pointer"><span className="material-icons-outlined ">logout</span> <span className="xl:flex hidden ml-4">Logout </span> </NavLink>
    
  </div>
  {/* side bar end */}
  </>
  );
  };
  export default Sidebar;