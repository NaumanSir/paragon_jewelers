import React from "react"
import AuctionItems from "../AuctionItems"

class Auction extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {

        const items = AuctionItems.map(item => {
            return (
                <div>
                    <h4>{item.name}</h4>
                </div>
            )
        })
        
        return (
            <div>
                <h1>Auction</h1>
                {items}
            </div>
        )
    }
}

export default Auction