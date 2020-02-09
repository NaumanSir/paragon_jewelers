import React from "react"
import AuctionItems from "../AuctionItems"

class Auction extends React.Component {
    constructor() {
        super()
        this.state = {
            bids: {}
        }
        this.addHundred = this.addHundred.bind(this)
    }

    addHundred(item) {
        this.setState((state) => ({
            bids: {
                ...state.bids,
                [item.name]: (state.bids[item.name] || 0) + 100
            }
        }))
    }

    render() {

        const items = AuctionItems.map(item => {
            return (
                <div>
                    <h4>{item.name}</h4>
                    <h4>${item.starting_bid + (this.state.bids[item.name] || 0)}</h4>
                    <button onClick={() => this.addHundred(item)}>
                        Bid $100
                    </button>
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