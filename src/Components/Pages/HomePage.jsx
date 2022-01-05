import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const HomePage = () => {
  const [users, setUsers] = useState([""]);

  useEffect(() => {
    showUsers();
  }, []);

  const showUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    // console.log(result.data);
    setUsers(result.data);
  };

  return (
    <div className="home_container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table conatainer">
          <thead className="thead-dark border shadow">
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className="btn btn-primary btn-sm" to={`/user/view/${user.id}`}>View</Link>
                    <button className="btn btn-outline-secondary btn-sm m-1">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
