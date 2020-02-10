import React from "react"
import "./Contact.css"
import Visit from "./Visit"

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            render: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ render: true })
    }

    render() {
        return (
            <div className="contact_background">
                <div className="contact_section">
                    <h1>Contact Us</h1>
                    <p>We're here to help with whatever your jewelry needs may be. Don't hesitate to contact us.</p>
                    <p><strong>Email us:</strong> paragon@paragonjewelers.com</p>
                    <p><strong>Call us:</strong> (310) 555-0126</p>
                </div>
                {/* <img src="https://cdn.pixabay.com/photo/2014/10/24/03/22/rodeo-500716_1280.jpg" /> */}
                <button onClick={this.handleClick}>Visit Us</button>
                {this.state.render ? <Visit /> : null}
            </div>
        )
    }
}

export default Contact