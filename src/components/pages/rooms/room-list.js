import React, { useEffect, useState } from 'react'


const RoomList = () => {

  const [rooms,setRooms] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () =>{
    const response = await fetch('http://localhost:3002');

    const responseJSON = await response.json();
    console.log(responseJSON);
    setRooms(responseJSON);
  }
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>price_per_person</th>
          <th>discounted_price</th>
          <th>bed_details</th>
          <th>amenities</th>
          <th>person_capacity</th>
          <th>photos</th>
          <th>thumbnail</th>
        </tr>

        {rooms.map((user) => {
          return(
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.price_per_person}</td>
              <td>{user.discounted_price}</td>
              <td>{user.bed_details}</td>
              <td>{user.amenities}</td>
              <td>{user.person_capacity}</td>
              <td><img src={rooms.photos} width={100} height={100} /></td>
              <td>{user.thumbnail}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default RoomList