import React from "react"
import ProductList from "../ProductList"

class Browse extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {

        // const data = this.props.ProductList

        // const products = data.map(product => {
        //     console.log(product)
        // })
        console.log(ProductList)

        return (
            <div>
                <h1>Browse</h1>
                {/* <h4>{this.props.products.id}</h4> */}
                {/* <h4>{this.props.product.id}</h4>
                <h4>{this.props.product.name}</h4>
                <img src={this.props.product.img_src} />
                <h4>{this.props.product.price}</h4> */}
            </div>
        )
    }
}

export default Browse