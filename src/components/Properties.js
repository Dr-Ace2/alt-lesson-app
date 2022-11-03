import React from "react";
// let Car =({brand, color})=>{

// let Car =(prop)=>{
let Car =({data})=>{

let { brand, color, year}= data

    return(
        <div>
        <h1>{` ${brand} , ${color} , ${year} `}</h1>
          
        {/* <h1>my car's name is {prop.brand} and my true color {prop.color}</h1>     */}
        <h1>my car is  {brand} and my color {color}</h1>
        {/* <h1>{`my car is  ${brand} and my color ${color}`}</h1> */}

        {/* <h1>{`my car is  ${data.brand} and my color ${data.color} and year is ${data.year} `}</h1> */}


        </div>
    )
}


let Property =()=>{
    
    // let Car =(prop)=>{

    //     return(
    //         <div>
    
    //         <h1>my car's name is {prop.brand} and my true color {prop.color}</h1>
    
    //         </div>
    //     )
    // }
    
    


    return(

        <div>
            {/* <Car brand="ford" color="silver"/> */}
            {<Car
            let  data ={

                {
                     brand:'ford',
                    
                    color:'silver',

                    year:2020

                }
            }
            
              /> }
             

        </div>
    )


}

export default Property;
