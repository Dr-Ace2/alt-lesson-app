import React from "react";
import Avatar from './Avatar';
import '../styles/userprofile.css'

let UserProfile = () => {

  
    return (
      <div className="card">
               <Avatar />
        <p>This is avatar</p>
        <p>Avatar is a gentle man </p>
      </div>
    );
  };

  export default UserProfile;