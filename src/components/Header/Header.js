import React from "react"
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="headingText">
                <h1>
                    Employee Directory
                </h1>
                <h4>
                    Click on the arrows to sort by heading or search from an employee
                </h4>
            </div>
        </div>
    )
}

export default Header