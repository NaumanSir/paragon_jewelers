import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

class Footer extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div className="footer-background">
                <p>* The above 'Paragon Jewelers' logo was provided by logomakr.com and is intended for demonstrational purposes only.</p>
                <div className="footer-navbar">
                    <ul>
                        <Link to="/subscribe"><li>Subscribe to our list</li></Link>
                        <Link to="/contact"><li>Contact Us</li></Link>
                        <Link to="/catalog"><li>Download our Catalog</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer