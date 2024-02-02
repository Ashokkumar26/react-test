import { useEffect, useState } from "react"
import "./table.css"

type UserT = {
    username: string,
    name: string,
    email: string
}
export default function UserTable() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res=>{
            const users = res.map((data: UserT) => ({ username: data.username, name: data.name, email: data.email }))
            setUsers(users)
        })
    }, [])
    
  return (
    <div className="wrappers">
    <div className="form">
    <table id="customers">
    <thead>
  <tr>
    <th>S.No</th>
    <th>Username</th>
    <th>Full Name</th>
    <th>Email</th>
  </tr>
  </thead>
  <tbody>
  {
    users.map((data:UserT, id)=>(
    <tr>
    <td>{id+1}</td>
    <td>{data.username}</td>
    <td>{data.name}</td>
    <td>{data.email}</td></tr>
    ))
  }
   </tbody>
</table>
</div>
    </div>
  )
}
