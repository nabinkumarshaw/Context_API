import React, { useState } from "react";
import usercontext from "./userContext";

const usercontextprovider = ({children})=>{
    const [user,setUser] = useState(null)  //ye user aur setuser kisi component mey pass hga
    
    return(
        <usercontext.Provider value={{user,setUser}}>
        {children}
        </usercontext.Provider>
    )
}

export default usercontextprovider;
