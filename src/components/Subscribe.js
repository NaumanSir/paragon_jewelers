import React from "react"
import "./Subscribe.css"

class Subscribe extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div className="subscribe_background">
                <h1>Subscribe to our email list for exclusive deals and offerings.</h1>
                <form>
                    <label>Name:</label>
                        <input className="inputs" type="text" value="&nbsp;Name" /><br />
                    <label>Email:</label>
                        <input className="inputs" type="email" value="&nbsp;Email" /><br />
                        <input className="checkbox" name="consented" type="checkbox" />
                    <label className="disclaimer" for="consented">I consent to receive promotional emails from Paragon Jewelers in accordance with California state law. I understand I am welcome to unsubscribe at any time of my choosing.</label>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        )
    }
}

export default Subscribe