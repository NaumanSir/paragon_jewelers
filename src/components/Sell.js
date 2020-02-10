import React from "react"
import "./Sell.css"

class Sell extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <div className="sell_header">
                    <h1>Sell to us</h1>
                    <p>Looking to sell some of your jewelry? You've come to the right place. Paragon Jewelers buys all types of jewelry, including movie studio prop jewelry.</p>
                    <p>You're welcome to visit our store and have your jewelry appraised, else you're more than welcome to use the form below.</p>
                    <p><strong>Please Note:</strong> If you're looking to auction anything, please contact us directly at (310) 555-0126.</p>
                </div>

                <form className="sell_form">
                    Does what you're looking to sell fall into any of the following categories?<br />
                        <select>
                            <option value="ring">Ring</option>
                            <option value="necklace">Necklace</option>
                            <option value="bracelet">Bracelet / Bangle</option>
                            <option value="none">None</option>
                        </select><br />
                    Please describe what you're selling.<br />
                        <input className="sell_desc" type="textarea" cols="50" name="desc" /><br />
                    <div className="sell_submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Sell