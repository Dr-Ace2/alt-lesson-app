import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, Suspense } from "react";
import Helloworld from "./components/Helloworld";
import UserProfile from "./components/Userprofile";
import Listitems from "./components/Listitems";
import Greetings from "./components/Greetings";
import Loopobj from "./components/Loopobj";
import Onchange from "./components/Onchange";
import Onsubmit from "./components/Onsubmit";
import Mouseevent from "./components/Mouseevent";
import Counters from "./components/Counters";
import "./styles/app.css";
import Property from "./components/Properties";
import Proplist from "./components/Proplist";
import Conditionalred from "./components/Conditinalrend";
import Useeffect from "./components/Useeffect";
import Usecontext from "./components/Usecontext";
import Customhooks from "./components/Customhooks";
import Routerz from "./components/Routerz";
import Home from './components/Home';
import About from './components/About';
import Paginate from './components/Pagination';
import Lazyloading from './components/Lazyloading'
import Avatar from './components/Avatar';
import UserContext from './components/UserContext';
import Login from './components/Login';
// import React, {useState} from 'react';
import { UserContextProvider } from "./components/UserContext";
import Profile from "./components/Profile";
import { LoginContext} from "./components/Contexts/LoginContext"
// let LazyAbout = React.lazy(()=> import ('./components/About'));


let Hello = () => {

     const [showProfile, setShowProfile] = useState(false);
     const [username, setUsername] = useState('');
   

  return (
    <Router>

    <div className="counter-cont">
             <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
              {showProfile ? <Profile/> : <Login/>}
              </LoginContext.Provider>
        
      {/* <p className='hello'> hello world now!</p>
          <Helloworld/>
          <Listitems />
          <Loopobj/> */}
      {/* <Onchange /> */}
      {/* <Onsubmit /> */}
      {/* <Counters /> */}
      {/* <Mouseevent/> */}
      {/* <Property/> */}
      {/* <Proplist/> */}
      {/* <Conditionalred /> */}
      {/* <Useeffect /> */}
      {/* <Usecontext /> */}
      {/* <Customhooks /> */}
      {/* <Paginate/> */}
      {/* <Lazyloading/> */}
      {/* <Greetings/>  */}
      {/* <UserProfile /> */}
      <UserContext/>
      {/* <UserContextProvider>  </UserContextProvider>; */}
      <Routerz />
         

        

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}
          
          // {
          
        //   <Suspense fallback={<div>

        //     loading.............................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................
        //     loading.................

        // </div>}>
              //  <About/>
          // </Suspense>
        // }
          
          />

        </Routes>
   
    
    

    </div>
    </Router>

  );
};

export default Hello;
