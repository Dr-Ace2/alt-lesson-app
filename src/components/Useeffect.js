import React, { useEffect, useState} from 'react';


const Useeffect =() =>{
       

    let [counter, setCounter]= useState(0);

        useEffect(()=>{

              console.log("use effect ran")

        }, [counter] )


    function Handleclick(){
        
        setCounter(counter +1)

    }

    return(

        <div>
            <h1> hello world now o</h1>
            <button onClick={Handleclick}>Click me pls!</button>
        </div>
      
    )

};

export default Useeffect;