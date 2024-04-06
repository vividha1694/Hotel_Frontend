import React, { useEffect, useState } from 'react'

const EditRoom = () => {
  const [start_date, setStart_date] = useState();
  const [end_date, setEnd_date] = useState();
  const [room_id, setRoom_id] = useState();
  const [room, setRoom] = useState();
  const [price, setPrice] = useState();
  const [tax, setTax] = useState();
  const [total_price, setTotal_price] = useState();
  const [user_id, setUser_id] = useState();
  const [user, setUser] = useState();
  const [booking_date, setBooking_date] = useState();
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();
  const [booking_transaction_reference, setBooking_transaction_reference] = useState("");

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("Start_date =" + start_date);
    console.log("End_date =" + end_date);
    console.log("Room_id =" + room_id);
    console.log("Room =" + room);
    console.log("Price =" + price);
    console.log("Tax =" + tax);
    console.log("Total_price =" + total_price);
    console.log("User_id =" + user_id);
    console.log("User =" + user);
    console.log("Booking_date =" + booking_date);
    console.log("Adults =" + adults);
    console.log("Kids =" + kids);
    console.log("Booking_transaction_reference =" + booking_transaction_reference);

    fetchBooking();
  },[]);

  const fetchBooking = async()=> {
    const response = await fetch(`http://localhost:3002/bookings/${id}`);
    const responseJSON = await response.json();
    console.log("user", responseJSON);

    setStart_date(responseJSON.start_date);
    setEnd_date(responseJSON.end_date);
    setRoom_id(responseJSON.room_id);
    setRoom(responseJSON.room);
    setPrice(responseJSON.price);
    setTax(responseJSON.tax);
    setTotal_price(responseJSON.total_price);
    setUser_id(responseJSON.user_id);
    setUser(responseJSON.user);
    setBooking_date(responseJSON.booking_date);
    setAdults(responseJSON.adults);
    setKids(responseJSON.kids);
    setBooking_transaction_reference(responseJSON.booking_transaction_reference);

   
  }
  return (
    <>
    <h2>I'M A EDIT BOOKING</h2>
    <form onSubmit={async(event)=>{
      event.preventDefault();
    console.log("Start_date =" + start_date);
    console.log("End_date =" + end_date);
    console.log("Room_id =" + room_id);
    console.log("Room =" + room);
    console.log("Price =" + price);
    console.log("Tax =" + tax);
    console.log("Total_price =" + total_price);
    console.log("User_id =" + user_id);
    console.log("User =" + user);
    console.log("Booking_date =" + booking_date);
    console.log("Adults =" + adults);
    console.log("Kids =" + kids);
    console.log("Booking_transaction_reference =" + booking_transaction_reference);

    const data = {
     start_date:start_date,
     end_date:end_date,
     room_id:room_id,
     room:room,
     price:price,
     tax:tax,
     total_price:total_price,
     user_id:user_id,
     user:user,
     booking_date:booking_date,
     adults:adults,
     kids:kids,
     booking_transaction_reference:booking_transaction_reference,
    };

      const requestOptions = {
        method : "PUT",
        headers : { "Content-Type": "application.json" },
        body: JSON.stringify(data),
      };
        const response = await fetch
        (`http://localhost:3002/bookings/${id}`,requestOptions);

      const responseJSON = await response.json();
      console.log("data search", responseJSON);
      window.location.replace("http://localhost:3000/booking-list");
    }}
    >
    <label htmlFor="start_date">Start Date</label>
    <input type="text"
    id="start_date"
    name="start_date"
    value={start_date}
    onChange={(event)=> {
      setStart_date(event.target.value);
    }} />
    <br />
    <label htmlFor="end_start">End Date</label>
    <input type="text"
    id="end_start"
    name="end_start"
    value={end_date}
    onChange={(event)=> {
      setEnd_date(event.target.value);
    }} />
    <br />
    <label htmlFor="room_id">Room Id</label>
    <input type="text"
    id="room_id"
    name="room_id"
    value={room_id}
    onChange={(event)=> {
      setRoom_id(event.target.value);
    }} />
    <br />
    <label htmlFor="room">Room</label>
    <input type="text"
    id="room"
    name="room"
    value={room}
    onChange={(event)=> {
      setRoom(event.target.value);
    }} />
    <br />
    <label htmlFor="price">Price</label>
    <input type="text"
    id="price"
    name="price"
    value={price}
    onChange={(event)=> {
      setPrice(event.target.value);
    }} />
    <br />
    <label htmlFor="tax">Tax</label>
    <input type="text"
    id="tax"
    name="tax"
    value={tax}
    onChange={(event)=> {
      setTax(event.target.value);
    }} />
    <br />
    <label htmlFor="total_price">Total Price</label>
    <input type="text"
    id="total_price"
    name="total_price"
    value={total_price}
    onChange={(event)=> {
      setTotal_price(event.target.value);
    }} />
    <br />
    <label htmlFor="user_id">User Id</label>
    <input type="text"
    id="user_id"
    name="user_id"
    value={user_id}
    onChange={(event)=> {
      setUser_id(event.target.value);
    }} />
    <br />
    <label htmlFor="user">User</label>
    <input type="text"
    id="user"
    name="user"
    value={user}
    onChange={(event)=> {
      setUser(event.target.value);
    }} />
    <br />
    <label htmlFor="booking_date">Booking Date</label>
    <input type="text"
    id="booking_date"
    name="booking_date"
    value={booking_date}
    onChange={(event)=> {
      setBooking_date(event.target.value);
    }} />
    <br />
    <label htmlFor="adults">Adults</label>
    <input type="text"
    id="adults"
    name="adults"
    value={adults}
    onChange={(event)=> {
      setAdults(event.target.value);
    }} />
    <br />
    <label htmlFor="kids">Kids</label>
    <input type="text"
    id="kids"
    name="kids"
    value={kids}
    onChange={(event)=> {
      setKids(event.target.value);
    }} />
    <br />
    <label htmlFor="booking_transaction_reference">Booking Transaction Reference</label>
    <input type="text"
    id="booking_transaction_reference"
    name="booking_transaction_reference"
    value={user_id}
    onChange={(event)=> {
      setBooking_transaction_reference(event.target.value);
    }} />
    <br />
  
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EditRoom
