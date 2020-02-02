import React from "react"
import "./About.css"
import Visit from "./Visit"

class About extends React.Component {
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
            <div className="about_section">
                <h1>About Us</h1>
                <img src="https://cdn.pixabay.com/photo/2019/10/15/15/35/love-4552087_1280.jpg" />
                <h2>Our Story</h2>
                <p>The story of Paragon Jewelers begins over three decades ago. Raj and Sheila had just met. Raj was working as an apprentice for a goldsmith and happened upon Sheila at the nearby apartment complex. The two made faces at each other through the windows and eventually became friends who eventually became even closer. Raj secretly started working on making a ring and one day proposed to Sheila, an English professor. The word "Paragon" was taken from one of Sheila's seminal works on Shakespeare's Romeo & Juliet and worked into Raj's newfound jewelry store.</p>
                <p>Jewelry diamond ring necklace bracelet store paragon pearls gold diamond platinum. White gold silver carat princess round cushion oval emerald hope diamond. Asscher heart radiant marquise baguette tapered trillion. Garnet birthstones amethyst aquamarine diamond emerald pearl alexandrite. Ruby peridot sapphire opal tourmaline topaz citrine tanzanite zircon turquoise. Accent assay center Golconda peacock anklet bezel blemish chain pure. Radiant watch wind clarity Belgium earring. Eternity filigree setting shock resistance gem finish locket. Carat princess round cushion oval emerald hope diamond asscher heart radiant.</p>
                <h2>What we offer</h2>
                <p>Paragon Jewelers prides itself in its long tradition of custom jewelry - a tradition that started it all. In addition to that, Paragon Jewelers has one of the most extensive collections of diamond jewelry - from engagement rings to bangles, we have what you're looking for. We have a rotating offering of both new and antique pieces up for bid on our website and in-store. If you're looking to auction, we have you covered - just call or email us for more details.</p>
                <button onClick={this.handleClick}>Visit Us</button>
                {this.state.render ? <Visit /> : null}
            </div>
        )
    }
}

export default About