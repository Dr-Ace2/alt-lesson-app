import React from "react";

let Onchange =()=>{
         
    let Changeevent =(event)=>{

        // console.log(tipe.target.value)
        console.log("im changed")
    }

    return(

        <form>
           <input type='text' placeholder="name" onChange={Changeevent}/>
           <input type='text' placeholder="email"/>
           <input type='text' placeholder="password"/>
           <button type="submit">Submit</button>

        </form>
    )
   

}

export default Onchange;