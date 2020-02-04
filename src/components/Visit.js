import React from "react"
import "./Visit.css"

class Visit extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div className="visit">
                <h4>Our Address:</h4>
                <p>1221 N Rodeo Drive</p>
                <p>Beverly Hills, CA 90210</p>
                <div className="call_for_dir">
                    <h4>Need Directions?</h4>
                    <p>Call us at (310) 555-0126</p>
                    <p>We're more than happy to help.</p>
                </div>
            </div>
        )
    }
}

export default Visit