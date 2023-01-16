import React from "react";
import Anxdoc from "./Anxdoc";
import Bidoc from "./bipolar";
import Depdoc from "./Depdoc";
import Ocddoc from "./ocd";
import '../../css/findsup.css'
import Navigation from "../navigation";

const Findsupport = () =>{
 
    return(
        <div>
            <Navigation/>
            <div className="findsup-comp">

           
            <div className="fs-heading">
                <h1>We are here for you</h1>
            </div>
            <Anxdoc/>
            <Bidoc/>
            <Ocddoc/>
            <Depdoc/>
            </div>
        </div>
    )
    
}

export default Findsupport