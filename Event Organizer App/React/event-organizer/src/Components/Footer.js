import React from "react"

function Footer(){
    return(
        <footer className="fixed bottom-0 left-0 w-full bg-gray-400 text-white text-center h-6">
            &copy; {new Date().getFullYear()} MyCabin
        </footer>
    )
}

export default Footer