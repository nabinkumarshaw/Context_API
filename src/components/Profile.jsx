import React, { useContext } from 'react'
import usercontext from '../context/userContext';

const Profile = () => {
    const {user} = useContext(usercontext)
    if(!user){
        return(
            <div>
                Please Login
            </div>
        );
    }    
  return (
    <div>
        <h2>welcome {user.username}</h2>
    </div>
  );
}

export default Profile;