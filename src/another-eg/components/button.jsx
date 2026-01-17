import React, { useContext } from 'react'
import { Authcontext } from '../context/authcontext'

export default function Button() {
    const {login,logout}=useContext(Authcontext);

  return (
    <div>
        <button onClick={login}>Login</button> 
        <button onClick={logout}>Logout</button>
    </div>
  )
}
