import React from "react"
import AuctionItems from "../AuctionItems"
import "./Auction.css"

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

    // addThousand(item) {
    //     this.setState((state) => ({
    //         bids: {
    //             ...state.bids,
    //             [item.name]: (state.bids[item.name] || 0) + 1000
    //         }
    //     }))
    // }

    render() {

        const items = AuctionItems.map(item => {
            return (
                <div className="item_block">
                    <h3>{item.name}</h3>
                    <h4>Starting bid: ${item.starting_bid} | Estimated value: ${item.est_value}</h4>
                    <img src={item.img_src} />
                    <h4>Current Bid: ${item.starting_bid + (this.state.bids[item.name] || 0)}</h4>
                    <button onClick={() => this.addHundred(item)}>
                        Bid $100
                    </button>
                    {/* <h4>${item.starting_bid + (this.state.bids[item.name] || 0)}</h4>
                    <button onClick={() => this.addThousand(item)}>
                        Bid $1000
                    </button> */}
                </div>
            )
        })
        
        return (
            <div className="auction_page">
                <h1>Auctions from Paragon Jewelers</h1>
                <p>All bids made on this page are recorded to your account. There is no way to take your bid back - Should you need to do so, please contact us immediately, else you will be held responsible for payment should your bid be the highest.</p>
                <p>The auction items on this page will end at <strong>11am</strong> on <strong>March 9, 2020.</strong></p>
                {items}
            </div>
        )
    }
}

export default Auction