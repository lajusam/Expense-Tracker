import React, { useContext } from 'react';
import { Authcontext } from '../context/authcontext';

export default function Header() {
  const { islogin } = useContext(Authcontext);

  return (
    <div>
      <h2>
        {islogin ? "Welcome, user is logged in" : "Please login"}
      </h2>
    </div>
  );
}
