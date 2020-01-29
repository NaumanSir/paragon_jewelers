import React from "react"
import "./Footer.css"

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
                        <li>Subscribe to our list</li>
                        <li>Contact Us</li>
                        <li>Download our Catalog</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer