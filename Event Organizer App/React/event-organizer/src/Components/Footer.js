import React from "react"

function Footer(){
    return(
        <footer className="footer-item">
            &copy; {new Date().getFullYear()} MyCabin
        </footer>
    )
}

export default Footer