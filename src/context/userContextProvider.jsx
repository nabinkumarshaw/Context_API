import React, { useState } from "react";
import usercontext from "./userContext";

const usercontextprovider = ({children})=>{
    const [user,setUser] = useState(null)
    return(
        <usercontext.Provider value={{user,setUser}}>
        {children}
        </usercontext.Provider>
    )
}

export default usercontextprovider;