import React, { useEffect, useState } from 'react'


const PhotoList = () => {

  const [photos,setPhotos] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () =>{
    const response = await fetch('http://localhost:3002');

    const responseJSON = await response.json();
    console.log(responseJSON);
    setPhotos(responseJSON);
  }
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>url</th>
          <th>thumbnail_url</th>
        </tr>

        {photos.map((user) => {
          return(
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.url}</td>
              <td>{user.thumbnail_url}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
 
export default PhotoList