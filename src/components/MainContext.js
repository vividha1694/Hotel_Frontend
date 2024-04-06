import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import styles from './MainContext.module.css'
import UserList from './pages/users/user-list'
import NewUser from './pages/users/new-user'
import EditUser from './pages/users/edit-user'
import RoomList from './pages/rooms/room-list'
import NewRoom from './pages/rooms/new-room'
import EditRoom from './pages/rooms/edit-room'
import BookingList from './pages/bookings/booking-list'
import NewBooking from './pages/bookings/new-booking'
import EditBooking from './pages/bookings/edit-booking'
import PhotoList from './pages/photos/photo-list'
import NewPhoto from './pages/photos/new-photo'
import EditPhoto from './pages/photos/edit-photo'

import Layout from './Layout';


const MainContext = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList/>} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="user-list" element={<UserList />} />

          <Route path="new-room" element={<NewRoom />} />
          <Route path="edit-room" element={<EditRoom />} />
          <Route path="room-list" element={<RoomList />} />

          <Route path="new-booking" element={<NewBooking />} />
          <Route path="edit-booking" element={<EditBooking />} />
          <Route path="booking-list" element={<BookingList />} />

          <Route path="new-photo" element={<NewPhoto />} />
          <Route path="edit-photo" element={<EditPhoto />} />
          <Route path="photo-list" element={<PhotoList />} />

        </Route>
      </Routes>
      
      </>
    
  )
}

export default MainContext
