import React, { useEffect, useState } from 'react'

const EditRoom = () => {
  const [name, setName] = useState();
  const [price_per_person, setPrice_per_person] = useState();
  const [discounted_price, setDiscounted_price] = useState();
  const [bed_details, setBed_details] = useState();
  const [amenities, setAmenities] = useState();
  const [person_capacity, setPerson_capacity] = useState();
  const [photos, setPhotos] = useState();
  const [thumbnail, setThumbnail] = useState();

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("Name =" + name);
    console.log("Price_per_person =" + price_per_person);
    console.log("Discounted_price =" + discounted_price);
    console.log("Bed_details =" + bed_details);
    console.log("Amenities =" + amenities);
    console.log("Person_capacity =" + person_capacity);
    console.log("Photos =" + photos);
    console.log("Thumbnail =" + thumbnail);

    fetchRoom();
  },[]);

  const fetchRoom = async()=> {
    const response = await fetch(`http://localhost:3002/rooms/${id}`);
    const responseJSON = await response.json();
    console.log("user", responseJSON);

    setName(responseJSON.name);
    setPrice_per_person(responseJSON.price_per_person);
    setDiscounted_price(responseJSON.discounted_price);
    setBed_details(responseJSON.bed_details);
    setAmenities(responseJSON.amenities);
    setPerson_capacity(responseJSON.person_capacity);
    setPhotos(responseJSON.photos);
    setThumbnail(responseJSON.thumbnail);
   
  }
  return (
    <>
    <h2>I'M A EDIT ROOM</h2>
    <form onSubmit={async(event)=>{
      event.preventDefault();
    console.log("Name =" + name);
    console.log("Price_per_person =" + price_per_person);
    console.log("Discounted_price =" + discounted_price);
    console.log("Bed_details =" + bed_details);
    console.log("Amenities =" + amenities);
    console.log("Person_capacity =" + person_capacity);
    console.log("Photos =" + photos);
    console.log("Thumbnail =" + thumbnail);;

    const data = {
      name:name,
      price_per_person:price_per_person,
      discounted_price:discounted_price,
      bed_details:bed_details,
      amenities:amenities,
      person_capacity:person_capacity,
      photos:photos,
      thumbnail:thumbnail,
    };

      const requestOptions = {
        method : "PUT",
        headers : { "Content-Type": "application.json" },
        body: JSON.stringify(data),
      };
        const response = await fetch
        (`http://localhost:3002/rooms/${id}`,requestOptions);

      const responseJSON = await response.json();
      console.log("data search", responseJSON);
      window.location.replace("http://localhost:3000/room-list");
    }}
    >
    <label htmlFor="name">Name</label>
    <input type="text"
    id="name"
    name="name"
    value={name}
    onChange={(event)=> {
      setName(event.target.value);
    }} />
    <br />
    <label htmlFor="price_per_person">Price Per Person</label>
    <input type="text"
    id="price_per_person"
    name="price_per_person"
    value={price_per_person}
    onChange={(event)=> {
      setPrice_per_person(event.target.value);
    }} />
    <br />
    <label htmlFor="discounted_price">Discounted Price</label>
    <input type="text"
    id="discounted_price"
    name="discounted_price"
    value={discounted_price}
    onChange={(event)=> {
      setDiscounted_price(event.target.value);
    }} />
    <br />
    <label htmlFor="bed_details">Bed Details</label>
    <input type="text"
    id="bed_details"
    name="bed_details"
    value={bed_details}
    onChange={(event)=> {
      setBed_details(event.target.value);
    }} />
    <br />
    <label htmlFor="amenities">Amenities</label>
    <input type="text"
    id="amenities"
    name="amenities"
    value={amenities}
    onChange={(event)=> {
      setAmenities(event.target.value);
    }} />
    <br />
    <label htmlFor="person_capacity">Person Capacity</label>
    <input type="text"
    id="person_capacity"
    name="person_capacity"
    value={person_capacity}
    onChange={(event)=> {
      setPerson_capacity(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Photo</label>
    <input type="text"
    id="photos"
    name="photos"
    value={photos}
    onChange={(event)=> {
      setPhotos(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Thumbnail</label>
    <input type="text"
    id="thumbnail"
    name="thumbnail"
    value={thumbnail}
    onChange={(event)=> {
      setThumbnail(event.target.value);
    }} />
    <br />
  
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EditRoom
