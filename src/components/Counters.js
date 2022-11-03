import React, { useState } from 'react';


const Counters =() =>{
       
    let [counter, setCounter]= useState(0);

    const increment =(event)=>{
    
       event.preventDefault();

       setCounter(counter +1)
      //  setCounter(prev => prev + 1)

    };

    const decrement = (event)=>{

      
      event.preventDefault();

      // setCounter(counter -1)

      if(counter > 0){
        setCounter (prev => prev - 1)
      }else{
        setCounter(0)

     }
      // setCounter(prev => prev - 1)
    

    };
   

      // eventhandler  
      // let handler = (event)=>{
      //      console.log("you clicked me")
      // }

    return(
        <div className='counter-cont'>

      
        <div>{counter}</div>
        <button className='action-btn'  onClick={increment}> increment</button>
        <button className='action-btn'  onClick={decrement}> decrement</button>

    
        {/* <button onClick={(event) =>{
            console.log("you clicked me")

        }}> click me</button> */}
        
         </div>

    )

};

export default Counters;