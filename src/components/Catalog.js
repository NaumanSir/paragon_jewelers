import React from "react"
import "./Catalog.css"
import paragon_catalog from "./paragon_catalog.pdf"

class Catalog extends React.Component {
    render() {
        return (
            <div>
                <div className="download">
                    <a href={paragon_catalog}><button>Download our Spring 2020 catalog</button></a>
                </div>
                {/* <p className="call_us">Have any questions? Call us at (310) 555-0126.</p> */}
            </div>
        )
    }
}

export default Catalog