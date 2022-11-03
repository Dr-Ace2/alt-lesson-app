
// if you want to place home page and about beside each other use thus component
import React from "react";
import Home from '../components/Home';
import About from '../components/About';
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'



let Routerz =()=>{



return(
    <div>
    
      
              
    <div><NavLink style={({isActive})=>
              isActive ? {color:'red'} : {color:'black'}}to="/"> home</NavLink></div> 
     <div><NavLink style={({isActive})=>
              isActive ? {color:'red'} : {color:'black'}}to="/About"> about</NavLink></div>



       
    </div>
    
    

    

)
}

export default Routerz;