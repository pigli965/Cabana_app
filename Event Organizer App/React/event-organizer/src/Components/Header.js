import React from "react";
import NavigationBar from "./NavigationBar";

function Header(){
    return(
        <header className="border-b font-bold p-3 flex justify-between items-center">           
            <span className="font-bold">
                Trip Event Organizer
            </span>

            <NavigationBar />
        </header>
    )
}

export default Header