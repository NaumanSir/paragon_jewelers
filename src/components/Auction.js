import React from "react"
import AuctionItems from "../AuctionItems"

class Auction extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }

    addHundred() {
        var updatedBid = AuctionItems.map(data => {
            console.log (
                data.starting_bid + 100
            )
        })
    }

    render() {

        const items = AuctionItems.map(item => {
            return (
                <div>
                    <h4>{item.name}</h4>
                    <h4>${item.starting_bid}</h4>
                    <button onClick={this.addHundred}>Bid $100</button>
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