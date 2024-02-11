// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NavigationBar(){
    return(
        <nav>
            <span className="home-trigger">
                <a href="/" >Home</a>                        
            </span>  
            <span className="about-trigger">
                <a href="/about/:aboutId">About</a>                        
            </span>  
            <span className="contact-trigger">
            <a href="/contact/:contactId">Contact</a>                      
            </span>                      
        </nav>
    )
}

export default NavigationBar