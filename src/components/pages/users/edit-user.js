import React, { useEffect, useState } from 'react'

const EditUser = () => {
  const [first_name, setfirst_Name] = useState();
  const [last_name, setlast_Name] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [identity_proof_number, setIdentity_Proof_Number] = useState();
  const [identity_proof_type, setIdentity_Proof_Type] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();

  const searchParams = new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

  useEffect(() => {
    console.log("FirstName =" + first_name);
    console.log("LastName =" + last_name);
    console.log("Username =" + username);
    console.log("Password =" + password);
    console.log("Age =" + age);
    console.log("Identity_Proof_Number =" + identity_proof_number);
    console.log("Identity_Proof_Type =" + identity_proof_type);
    console.log("Mobile =" + mobile);
    console.log("Address =" + address);
    console.log("Email =" + email);

    fetchUser();
  },[]);

  const fetchUser = async()=> {
    const response = await fetch(`http://localhost:3002/users/${id}`);
    const responseJSON = await response.json();
    console.log("user", responseJSON);

    setfirst_Name(responseJSON.first_name);
    setlast_Name(responseJSON.last_name);
    setUsername(responseJSON.username);
    setPassword(responseJSON.password);
    setAge(responseJSON.age);
    setIdentity_Proof_Number(responseJSON.identity_proof_number);
    setIdentity_Proof_Type(responseJSON.identity_proof_type);
    setMobile(responseJSON.mobile);
    setAddress(responseJSON.address);
    setEmail(responseJSON.email);
  }
  return (
    <>
    <h2>I'M A EDIT USER</h2>
    <form onSubmit={async(event)=>{
      event.preventDefault();
    console.log("FirstName =" + first_name);
    console.log("LastName =" + last_name);
    console.log("Username =" + username);
    console.log("Password =" + password);
    console.log("Age =" + age);
    console.log("Identity_Proof_Number =" + identity_proof_number);
    console.log("Identity_Proof_Type =" + identity_proof_type);
    console.log("Mobile =" + mobile);
    console.log("Address =" + address);
    console.log("Email =" + email);

    const data = {
      first_name:first_name,
      last_name:last_name,
      username:username,
      password:password,
      age:age,
      identity_proof_number:identity_proof_number,
      identity_proof_type:identity_proof_type,
      mobile:mobile,
      address:address,
      email:email,
    };

      const requestOptions = {
        method : "PUT",
        headers : { "Content-Type": "application.json" },
        body: JSON.stringify(data),
      };
        const response = await fetch
        (`http://localhost:3002/users/${id}`,requestOptions);

      const responseJSON = await response.json();
      console.log("data search", responseJSON);
      window.location.replace("http://localhost:3000/user-list");
    }}
    >
    <label htmlFor="first_name">First Name</label>
    <input type="text"
    id="first_name"
    name="first_name"
    value={first_name}
    onChange={(event)=> {
      setfirst_Name(event.target.value);
    }} />
    <br />
    <label htmlFor="last_name">Last Name</label>
    <input type="text"
    id="last_name"
    name="last_name"
    value={last_name}
    onChange={(event)=> {
      setlast_Name(event.target.value);
    }} />
    <br />
    <label htmlFor="username">User Name</label>
    <input type="text"
    id="username"
    name="username"
    value={username}
    onChange={(event)=> {
      setUsername(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Password</label>
    <input type="text"
    id="password"
    name="password"
    value={password}
    onChange={(event)=> {
      setPassword(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Age</label>
    <input type="text"
    id="age"
    name="age"
    value={age}
    onChange={(event)=> {
      setAge(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Identity Number</label>
    <input type="text"
    id="identity_proof_number"
    name="identity_proof_number"
    value={identity_proof_number}
    onChange={(event)=> {
      setIdentity_Proof_Number(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Identity Type</label>
    <input type="text"
    id="identity_proof_type"
    name="identity_proof_type"
    value={identity_proof_type}
    onChange={(event)=> {
      setIdentity_Proof_Type(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Mobile</label>
    <input type="text"
    id="mobile"
    name="mobile"
    value={mobile}
    onChange={(event)=> {
      setMobile(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Address</label>
    <input type="text"
    id="address"
    name="address"
    value={address}
    onChange={(event)=> {
      setAddress(event.target.value);
    }} />
    <br />
    <label htmlFor="username">Email</label>
    <input type="text"
    id="email"
    name="email"
    value={email}
    onChange={(event)=> {
      setEmail(event.target.value);
    }} />
    <br />
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EditUser
