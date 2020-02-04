import React from "react"
import "./Visit.css"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

class Visit extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {

        const mapStyle = {
            width: '400px',
            height: '300px',
            padding: '20px',
            margin: '0px 0px 0px 40px'
        }
        return (
            <div className="visit">
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyle}
                    initialCenter={{ lat: 34.067210, lng: -118.401050 }}
                >
                    <Marker />
                </Map>
                <h4>Our Address:</h4>
                <p>1221 N Rodeo Drive</p>
                <p>Beverly Hills, CA 90210</p>
                <div className="call_for_dir">
                    <h4>Need Directions?</h4>
                    <p>Call us at (310) 555-0126.</p>
                    <p>We're more than happy to help.</p>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(Visit)