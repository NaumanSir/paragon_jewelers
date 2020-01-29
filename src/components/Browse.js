import React from "react"

class Browse extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <h1>Browse</h1>
                <h4>{this.props.product.id}</h4>
                <h4>{this.props.product.name}</h4>
                <img src={this.props.product.img_src} />
                <h4>{this.props.product.price}</h4>
            </div>
        )
    }
}

export default Browse