// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavigationBar(){
    return(
        <nav>
            <span className="text-xl">
                <a href="/" className='p-3'>Home</a>
                <a href="/contact/:contactId" className='p-3'>About Us</a>
                <a href="/about/:aboutId" className='p-3'>Contact Us</a>
                         
            </span>  
            <u1 className='p-3 m-4'></u1>            
        </nav>
    )
}

export default NavigationBar