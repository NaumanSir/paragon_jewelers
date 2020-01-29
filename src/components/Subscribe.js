import React from "react"

class Subscribe extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                        <input type="text" />
                    <label>Email:</label>
                        <input type="email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        )
    }
}

export default Subscribe