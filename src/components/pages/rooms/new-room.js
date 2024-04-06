import React, { useEffect, useState } from 'react'

const NewRoom = () => {
  const [name, setName] = useState();
  const [price_per_person, setPrice_per_person] = useState();
  const [discounted_price, setDiscounted_price] = useState();
  const [bed_details, setBed_details] = useState();
  const [amenities, setAmenities] = useState([]);
  const [person_capacity, setPerson_capacity] = useState();
  const [photos, setPhotos] = useState();
  const [thumbnail, setThumbnail] = useState();

  const [selectedAmenities, setSelectedAmenities] = useState([]);

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

  },[name,price_per_person,discounted_price,bed_details,amenities,person_capacity,photos,thumbnail]);

  useEffect(()=>{
    fetchAmenities();
  },[])

  const fetchAmenities = async () => {
    const response = await fetch(`http://localhost:3002/amenities`);
    const responseJSON = await response.json();
    console.log("response", responseJSON);
    setAmenities = responseJSON;

  }
  
  return (
    <>
    <h2>I'M A NEW ROOM</h2>
    <form onSubmit={async(event)=>{
      event.preventDefault();
    console.log("Name =" + name);
    console.log("Price_per_person =" + price_per_person);
    console.log("Discounted_price =" + discounted_price);
    console.log("Bed_details =" + bed_details);
    console.log("Amenities =" + amenities);
    console.log("Person_capacity =" + person_capacity);
    console.log("Photos =" + photos);
    console.log("Thumbnail =" + thumbnail);

    const data = {
      name:name,
      price_per_person:price_per_person,
      discounted_price:discounted_price,
      bed_details:bed_details,
      amenities:selectedAmenities,
      person_capacity:person_capacity,
      photos:photos,
      thumbnail:thumbnail,
    };

      const requestOptions = {
        method : "POST",
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
    onChange={(event)=> {
      setName(event.target.value);
    }} />
    <br />
    <label htmlFor="price_per_person">Price Per Person</label>
    <input type="text"
    id="price_per_person"
    name="price_per_person"
    onChange={(event)=> {
      setPrice_per_person(event.target.value);
    }} />
    <br />
    <label htmlFor="discounted_price">Discounted Price</label>
    <input type="text"
    id="discounted_price"
    name="discounted_price"
    onChange={(event)=> {
      setDiscounted_price(event.target.value);
    }} />
    <br />
    <label htmlFor="bed_details">Bed Details</label>
    <input type="text"
    id="bed_details"
    name="bed_details"
    onChange={(event)=> {
      setBed_details(event.target.value);
    }} />
    <br />
    <label htmlFor="amenities">Amenities</label>
    <select name="amenities" id="amenities" multiple onChange={event=>{
      //console.log(event.target.options)
      var options = event.target.options;
            var value = [];
            var tempSelectedAmenities = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
                tempSelectedAmenities.push(amenities[i]);
              }
            }
            setSelectedAmenities(tempSelectedAmenities);
            console.log("selected values", value); 
    }}
    >
      {amenities.map(amenity=>{
        return <option value={amenity._id}>{amenity.name}</option>
      })}
    </select>
    <br />
    <label htmlFor="person_capacity">Person Capacity</label>
    <input type="text"
    id="person_capacity"
    name="person_capacity"
    onChange={(event)=> {
      setPerson_capacity(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Photo</label>
    <input type="text"
    id="photos"
    name="photos"
    onChange={(event)=> {
      setPhotos(event.target.value);
    }} />
    <br />
    <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg"
     onChange={(e) =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log("reader", reader)
    console.log("file", file)
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        // setFile(file)
        // setSize(file.size);
        // setName(file.name)
        console.log(reader.result);
        setPhotos(reader.result);
        // setImagePreview(reader.result)
        console.log("i m here");
      }
      reader.readAsDataURL(file);
    }
  }
} />
          
    <br />
    <label htmlFor="username">Thumbnail</label>
    <input type="text"
    id="thumbnail"
    name="thumbnail"
    onChange={(event)=> {
      setThumbnail(event.target.value);
    }} />
    <br />
  
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default NewRoom
