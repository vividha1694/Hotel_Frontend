import React, { useEffect, useState } from 'react'


const BookingList = () => {

  const [bookings,setBookings] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () =>{
    const response = await fetch('http://localhost:3002');

    const responseJSON = await response.json();
    console.log(responseJSON);
    setBookings(responseJSON);
  }
  return (
    <div>
      <table>
        <tr>
          <th>start_date</th>
          <th>end_date</th>
          <th>room_id</th>
          <th>room</th>
          <th>price</th>
          <th>tax</th>
          <th>total_price</th>
          <th>user_id</th>
          <th>user</th>
          <th>booking_date</th>
          <th>adults</th>
          <th>kids</th>
          <th>booking_transaction_reference</th>
        </tr>

        {bookings.map((user) => {
          return(
            <tr>
              <td>{user._id}</td>
              <td>{user.start_date}</td>
              <td>{user.end_date}</td>
              <td>{user.room_id}</td>
              <td>{user.room}</td>
              <td>{user.price}</td>
              <td>{user.tax}</td>
              <td>{user.total_price}</td>
              <td>{user.user_id}</td>
              <td>{user.user}</td>
              <td>{user.booking_date}</td>
              <td>{user.adults}</td>
              <td>{user.kids}</td>
              <td>{user.booking_transaction_reference}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default BookingList