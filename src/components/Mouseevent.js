import React , {useState} from "react";


let Mouseevent=()=>{
    let [state , setState] = useState('hello world')
    
    let mouseover=(event)=>{
        setState("i have changed")
        setTimeout(() => {
            setState('Hello world now!')
        }, 1000);
            
            event.preventDefault();
             

    }

    return(

           <div onMouseOver={mouseover}> {state}</div>

    )

}


export default Mouseevent