import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import "../styles/Countries.css"
import User from "./User"
import axios from "axios";


function Users() {
  const [users, setUsers] = useState([])
  if (!users.length) {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res)
      setUsers(res.data)
    })
  }

  return (
    <Table striped bordered hover className={"countries"}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {users.map(user => user.email ?
        <User key={user.id} name={user.name} username={user.username} email={user.email}/> :
        <User key={user.id} name={user.name} username={user.username}/>
      )}
      </tbody>
    </Table>
  )
}


export default Users;
