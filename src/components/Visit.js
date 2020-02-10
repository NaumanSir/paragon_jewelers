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
            width: '510px',
            height: '367px',
            padding: '20px',
            margin: '0px 0px 0px 40px',
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
                <h3>Our Address:</h3>
                <p>1221 N Rodeo Drive</p>
                <p>Beverly Hills, CA 90210</p>
                <h3>Hours:</h3>
                <p><strong>Monday to Thursday:</strong> 8am to 6pm</p>
                <p><strong>Fridays & Saturdays:</strong> 9am to 8pm</p>
                <p><strong>Sundays:</strong> Generally closed, open upon request</p>
                <div className="call_for_dir">
                    <h3>Need Directions?</h3>
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