import React from "react"
import "./Header.css"
import logo from "./paragon_logo.png"
import { Link } from "react-router-dom"

class Header extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <div className="header-background">
                    <Link to="/">
                        <img className="logo" src ={logo} />
                    </Link>
                    <div className="navbar">
                        <ul>
                            <Link to="/browse"><li>Browse</li></Link>
                            <Link to="/auction"><li>Auction</li></Link>
                            <Link to="/customize"><li>Customize</li></Link>
                            <Link to="/sell"><li>Sell to us</li></Link>
                            <Link to="/about"><li>About Us</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header