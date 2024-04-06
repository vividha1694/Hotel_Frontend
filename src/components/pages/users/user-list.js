import React, { useEffect, useState } from 'react'
import styles from './user-list.module.css'

const UserList = () => {

  const [users,setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () =>{
    const response = await fetch('http://localhost:3002');

    const responseJSON = await response.json();
    console.log(responseJSON);
    setUsers(responseJSON);
  }
  return (
    <div>
      <table>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>username</th>
          <th>password</th>
          <th>age</th>
          <th>identity_proof_number</th>
          <th>identity_proof_type</th>
          <th>mobile</th>
          <th>address</th>
          <th>email</th>
        </tr>

        {users.map((user) => {
          return(
            <tr>
              <td>{user._id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.identity_proof_number}</td>
              <td>{user.identity_proof_type}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default UserList