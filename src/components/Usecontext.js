import React, { createContext, useContext, useState } from "react";

let AuthContext = createContext({
  user: {
    // username: "Drace",
    // email: "muha@gmail.com",
    // name: "muhammed",
  },

  verified: false,
});

let AuthProvider = (props) => {
  let [user, setUser] = useState({
    username: "Drace",
    sex: "male",
    maritalStatus: "married",
    email: "muha@gmail.com",
    name: "muhammed",
    bio: "muhammed owoola is a frontend programmer",
    uniname: "Obafemi Awolowo",
    location: "located at Lagere",
  });
  return (
    <AuthContext.Provider
      value={{

         user: user,
        verified: true,
         setUser: setUser,
      }}
      
      >
        
      {props.children}
    </AuthContext.Provider>
  );
};

let Userbio = () => {
  let { user, setUser } = useContext(AuthContext);

  let Handlebioupdate = (event) => {
    event.preventDefault();

    setUser((prev) => {
      return {
        ...prev,

        bio: " muhammed owoola is a frontend programmer muhammed is also a physiotherapist",
        maritalStatus: "married and not single",
        sex:"male is male",
        name: 'name is now muhammed'
      };
    });
  };
  return (
    <div>
      <h4>user bio</h4>

      <div> {user.bio}</div>
      <div> {user.maritalStatus}</div>
      <div> {user.sex}</div>
      <div> {user.name}</div>
      <button onClick={Handlebioupdate}>update bio</button>
    </div>
  );
};

let Useruniversity =()=>{
  let {user, setUser} = useContext(AuthContext)

  let Handleuniupdate =()=>{
    

      setUser((prev)=>{

        return{

         ...prev,

         uniname: "it is now Obafemi Awolowo",
         location: "it is now located at Lagere",
        }
      })
    

    }
    return(
     <div>
      <h4>Uni bio</h4>

      <h4>{user.uniname}</h4>
      <h4>{user.location}</h4>
      <button onClick={Handleuniupdate}>update bio</button>
      </div>


    )
  }    

        
    
   
  // return(
  //   <div>

  //   </div>
  // )
// }

function Userprofile() {
  const { user, verified } = useContext(AuthContext);

  //   console.log(user);

  return (
    <div>
      <div>Username: {user.username}</div>
      <div>email: {user.email}</div>
      <div>name: {user.name}</div>
      <div>maritalStatus: {user.maritalStatus}</div>
      <div>sex: {user.sex}</div>
      <div>uniname: {user.uniname}</div>
      <div>location: {user.location}</div>
      <div>
        {" "}
        verified: {verified ? "yes" : "no"}
        <Userbio />
        <Useruniversity/>
      </div>
    </div>
  );
}

let Usecontext = () => {
  return (
    <div>
      <AuthProvider>
        <div>
          <Userprofile />
        </div>
      </AuthProvider>
    </div>
  );
};

export default Usecontext;
