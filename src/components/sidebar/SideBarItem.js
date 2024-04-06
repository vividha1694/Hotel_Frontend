import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  styles from "./SideBar.module.css";


const SideBarItem = (props) => {
    const [isOpen,setIsOpen] = useState(false);
    const [height,setHeight] =useState("35px");

    const expandItem = () => {
        setHeight("150px");
    };

    const collapseItem = () => {
        setHeight("35px");
    };

  return (
    <>
        <li className={`${styles["li-aside"]} ${styles["li-aside-item"]}`}
        style={{
            height:height,
            background:"purple",
        }}
        onClick={()=>{
            if(isOpen){
                collapseItem();
            }else{
                expandItem();
            }
            setIsOpen(!isOpen);

        }}
        >
            <Link to={props.path}>{props.title}</Link>        
            {/* <a class="active" href="#home">
              {props.title}
            </a> */}
          </li>
    </>
  )
}

export default SideBarItem
