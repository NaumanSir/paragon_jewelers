import React from "react"
import "./Home.css"
import home_gif from "./paragon_home.gif"

class Home extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div className="home_background">
                <img className="home_gif" src ={home_gif} />
            </div>
        )
    }
}

export default Home