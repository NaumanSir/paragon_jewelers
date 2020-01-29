import React from "react"
import ProductList from "../ProductList"

class Browse extends React.Component {
    constructor() {
        super()
        this.state = {
            jewelry: ProductList
        }
    }
    render() {
        const ProductList = this.state.jewelry.map(product => <Browse key={product.id} product={product}/>)
        return (
            <div>
                <h1>Browse</h1>
                <h4>{ProductList}</h4>
            </div>
        )
    }
}

export default Browse