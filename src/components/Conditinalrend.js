import React, { useState } from "react";

// import React from "react";


function Loader(){
          
   return(
      <div>
       <p> its loading....</p>
           
      </div>
   )
    
   }
   function Complete(){
            
      return(
         <div>
             <p> completed</p>
                 
         </div>
      )
        
   }

   
let Conditionalred =()=>{
              
          let [isloading, setIsLoading]=useState(true);

          setTimeout(() => {
                setIsLoading(false)
               
          }, 5000);


     return(

        <div>
           {isloading ? <Loader/>: <Complete/>}
        </div>
    )

}

export default Conditionalred;