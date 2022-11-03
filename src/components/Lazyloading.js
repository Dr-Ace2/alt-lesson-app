import React, { Suspense } from "react";
import About from "./About";
// import Greetings from "./Greetings"; 
import UserProfile from './Userprofile';

let Lazyloading=()=>{
 
    let Avatar = React.lazy(()=> import ('./Avatar'));

        
    
    return(
        <div>
            <Suspense fallback={<div>
                loading.............................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................
                loading.................

            </div>}>
                 
                <Avatar/>

            </Suspense>

        
            {/* <Greetings/> */}
            <UserProfile/>
        </div>
    )

}

export default Lazyloading;