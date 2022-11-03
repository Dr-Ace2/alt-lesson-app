import React from "react";

let Onsubmit =()=>{
         
    let Submitevent = (event) =>{

        event.preventDefault();

        // console.log("submitted")
        let elements=event.target.elements;
        let{name,mail,tel} = elements;

        console.log(name.value,mail.value,tel.value)

         
    }

    return(

        <form onSubmit={Submitevent}>
           <input type='text' placeholder="name"  name="name"/>
           <input type='text' placeholder="email" name="mail"/>
           <input type='text' placeholder="password" name="tel"/>
           <button type="submit">Submit</button>

        </form>
    )
   

}

export default Onsubmit;