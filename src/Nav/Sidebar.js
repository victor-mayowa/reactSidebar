import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "./Sidebar.css"
import {IconContext} from "react-icons"

function Sidebar() {
  const [sideBar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sideBar);
  return (
   
    <>
     <IconContext.Provider value={{color:"white"}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>
                    {item.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}
export default Sidebar;
