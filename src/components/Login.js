import React, {useState, useContext} from "react";
import {LoginContext} from "./Contexts/LoginContext"

function Login(){
    const {setUsername, setShowProfile}= useContext(LoginContext)
return(
    <>
          <input
          type='text'
          placeholder="Username.."
          onChange={(event)=>{
           setUsername(event.target.value);

          }
        
        }
        />
        <input type="text" placeholder= "password..."/>
        <button onClick={()=>{setShowProfile(true)}}>login</button>
    </>
)
}

export default Login;