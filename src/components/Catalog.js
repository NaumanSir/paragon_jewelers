import React from "react"
import paragon_catalog from "./paragon_catalog.pdf"

class Catalog extends React.Component {
    render() {
        return (
            <div>
                <a href={paragon_catalog}>Click Here</a>
            </div>
        )
    }
}

export default Catalog