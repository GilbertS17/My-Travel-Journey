import React from "react"
import earthLogo from "../images/earth-logo.png"

export default function Navbar() {
    return (
        <div className="nav-cent">
            <img src={earthLogo} className='nav-img'/>
            <p>My Travel Journal.</p>
        </div>
    )
}