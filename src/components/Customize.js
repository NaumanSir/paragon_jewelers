import React from "react"
import "./Customize.css"

class Customize extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div className="customize">
                <div className="form_header">
                    <h1>Request an order of customized jewelry from Paragon Jewelers.</h1>
                    <p>Complete the form below and Paragon Jewelers will contact you to clarify details and get you a quote.</p>
                </div>
                <div className="form_itself">
                    <form>
                        Your full name:<br />
                        <input type="text" name="fullname" value="full name" /><br />
                        Is this for a movie studio?
                        <input type="radio" name="for_movie_studio" value="yes" />Yes
                        <input type="radio" name="for_movie_studio" value="no" />No<br />
                        Company / Studio name (optional):<br />
                        <input type="text" name="studio_name" value="company / studio" /><br />
                        Does your request fall into any of the following categories?<br />
                        <select>
                            <option value="ring">Ring</option>
                            <option value="necklace">Necklace</option>
                            <option value="bracelet">Bracelet / Bangle</option>
                            <option value="none">None</option>
                        </select><br />
                        Number of pieces:&nbsp;&nbsp;
                        <input className="number_of_pieces" type="number" name="no_of_pieces" /><br />
                        Describe what you imagine the custom piece(s) to look like<br />
                        <input className="desc" type="textarea" cols="50" name="desc" /><br />
                        Is there any custom functionality you would like in this piece (fold out, light up, hidden compartment, etc.)?<br />
                        <input className="desc" type="textarea" name="functionality_desc" /><br />
                        <div className="submit_button">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Customize