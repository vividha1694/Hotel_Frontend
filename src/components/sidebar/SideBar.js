import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const MENU_ITEM = ["Users", "Rooms", "Bookings", "Photos"];
  

  return (
    <div className={styles["side-bar"]}>
   
      <aside>
      <nav>
        <ul className={styles["ul-aside"]}>
          <SideBarItem title={MENU_ITEM[0]}
          path="user-list"
          ></SideBarItem>
          <SideBarItem title={MENU_ITEM[1]}
          path="room-list"
          ></SideBarItem>
          <SideBarItem title={MENU_ITEM[2]}
          path="booking-list"
          ></SideBarItem>
          <SideBarItem title={MENU_ITEM[3]}
          path="photo-list"
          ></SideBarItem>
        </ul>
        </nav>
      </aside>
     
    </div>
  );
};

export default SideBar;
