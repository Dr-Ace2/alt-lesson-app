import React from "react";
import '../styles/userprofile.css'

let Loopobj = () => {
  const userobject = [
    {
      name: "John doe",
      bio: "graphic designer",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "moh",
      bio: "programmer",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  let userlist = userobject.map((users) => {
    return (
      <div className="loop">
        <h1> {users.name}</h1>
        <p>{users.bio}</p>
        <img src={users.avatar} alt="avatar" style={{ width: 200, height:200 }} />
      </div>
    );
  });

  return <div>{userlist}</div>;
};
export default Loopobj;
