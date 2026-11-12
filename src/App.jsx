import axios from 'axios'
import React from 'react'

const getusers = async () =>{
  const res = await axios.get("/users");
  console.log(res.data)
}
const getuserById = async () => {
  const res = await axios.get("/users/1");
  console.log(res.data);
}

const addUser = async ()=>{
  const res = await axios.post("/users",{
    name:"yazir",
    email:"yazir@gmail.com"
  });
  console.log(res.data)
}

const updateUser = async ()=>{
  const res = await axios.put("/users/3",{
    name:"faruk",
    email:"faruk@gmail.com"
  })
  console.log(res.data)
}


const deleteUser = async ()=>{
  const res = await axios.delete("/users/1")
  console.log (res.data)
}
const App = () => {
  return (
    <div>
      <button onClick={getusers}> get user</button><br></br><br />
      <button onClick={getuserById}>get user by id</button><br /><br/>
      <button onClick={updateUser}>update user</button><br /> <br/>
      <button onClick={addUser}>add user</button><br/><br/>
      <button onClick={deleteUser}>delete user</button>

    </div>
  )
}

export default App
