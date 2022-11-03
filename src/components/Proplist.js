import React from "react";
import '../styles/app.css'

let Car =({data})=>{


    return(

        <div>

        <h1 className="proplist"> {` my name is ${data.brand} , clor is ${data.color} , year is  ${data.year} `}</h1>


        </div>
    )
}


let Proplist =()=>{
    
    
    
    let cars =[{

             brand:'ford',
            
            color:'silver',

            year:2020

    },
        {     brand:'camry',
            
            color:'red',

            year:2021

    }]
    
    let listcars = cars.map((car)=>{

            return(
                <Car data = {car}/>
            )
    })


    return(

        <div>

            {listcars}
             

        </div>
    )


}

export default Proplist;
