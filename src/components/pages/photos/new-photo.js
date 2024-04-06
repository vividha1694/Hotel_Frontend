import React, { useEffect, useState } from 'react'

const NewRoom = () => {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [thumbnail_url, setThumbnail_url] = useState();

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("Name =" + name);
    console.log("Url =" + url);
    console.log("Thumbnail_url =" + thumbnail_url);

  },[name,url,thumbnail_url]);
  
  return (
    <>
    <h2>I'M A NEW PHOTO</h2>
    <form onSubmit={async(event)=>{
      event.preventDefault();
    console.log("Name =" + name);
    console.log("Url =" + url);
    console.log("Thumbnail_url =" + thumbnail_url);
   

    const data = {
      name:name,
      url:url,
      thumbnail_url:thumbnail_url,
    };

      const requestOptions = {
        method : "POST",
        headers : { "Content-Type": "application.json" },
        body: JSON.stringify(data),
      };
        const response = await fetch
        (`http://localhost:3002/photos/${id}`,requestOptions);

      const responseJSON = await response.json();
      console.log("data search", responseJSON);
      window.location.replace("http://localhost:3000/photo-list");
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
    <label htmlFor="url">URL</label>
    <input type="text"
    id="url"
    name="url"
    onChange={(event)=> {
      setUrl(event.target.value);
    }} />
    <br />
    <label htmlFor="thumbnail_url">Thumbnail URL</label>
    <input type="text"
    id="thumbnail_url"
    name="thumbnail_url"
    onChange={(event)=> {
      setThumbnail_url(event.target.value);
    }} />
    <br />
  
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default NewRoom
