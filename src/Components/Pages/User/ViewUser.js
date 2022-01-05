import React, { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
const ViewUser = () => {
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUsers();
    }, [])
    const loadUsers = async () => {
        const res = await axios.get(
            `http://localhost:3001/users/${id}`
        );
        setUser(res.data)
    }
    return (
        <div className='container'>
            <Link to='/' className='btn btn-primary btn-sm my-2'>
                Back to Home
            </Link>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser
