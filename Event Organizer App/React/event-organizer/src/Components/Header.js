import React from "react";
import NavigationBar from "./NavigationBar";

function Header(){
    return(
        <header className="header-bar border-b font-bold p-3 flex justify-between items-center h-15">           
            <span className="header-app">
                Trip Event Organizer             
            </span>

            <NavigationBar />
        </header>
    )
}

export default Header