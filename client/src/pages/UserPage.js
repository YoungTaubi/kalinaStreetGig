import { Link, useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails.js";
import EditUserDetails from "../components/EditUserDetails.js";
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from "../context/auth.js";


function UserPage() {

const { id } = useParams()
// const [currentUser, setCurrentUser] = useState(null)   

const { user, setUser } = useContext(AuthContext)

	// useEffect(() => {
	// 	axios.get(`/api/user/${id}`)
	// 		.then(response => {
	// 			console.log(response)
	// 			setCurrentUser(response.data)
	// 			console.log('res', response.data);
	// 		})
	// 		.catch(err => console.log(err))
	// }, [])

	return (
        <>
        <div >
            <UserDetails user={user}/>
            <EditUserDetails 
			user={user}
			setUser={setUser}
			/>
            <Link to="/AddEvent"><button className="primary-button">Create your event</button></Link>
        </div>

     
       </>
	)
}

export default UserPage;