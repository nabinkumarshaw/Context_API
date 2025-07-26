import React from 'react'
import { useState,useContext } from 'react' 
import usercontext from '../context/userContext';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(usercontext);   //This line is most important whenever we have to use usecontext to globalise the thing we use this

    const handlesubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login Form</h2>
        <input type="text" placeholder="enter username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login
