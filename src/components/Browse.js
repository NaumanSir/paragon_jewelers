import React from "react"
import ProductList from "../ProductList"

class Browse extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {

        const data = ProductList

        const products = data.map(product => {
            return (
                <div>
                    {/* <h4>{product.id}</h4> */}
                    {/* <img src={product.img_src} /> */}
                    <h4>{product.name}</h4>
                    <h4>${product.price}</h4>
                </div>
            )
        })

        return (
            <div>
                <h1>Browse</h1>
                {products}
            </div>
        )
    }
}

export default Browse