import React from "react"

// class Browse extends React.Component {
//     // constructor() {
//     //     super()
//     //     this.state = {}
//     // }
//     render() {
//         return (
//             <div>
//                 <h1>Browse</h1>
//                 <h4>{this.props.id}</h4>
//             </div>
//         )
//     }
// }

function Browse(props) {
    return (
        <div>
             <h1>Browse</h1>
             <h4>{props.product.id}</h4>
         </div>
    )
}

export default Browse