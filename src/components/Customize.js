import React from "react"

class Customize extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <div className="form_header">
                    <h1>Request an order of customized jewelry from Paragon Jewelers.</h1>
                    <p>Complete the form below and Paragon Jewelers will contact you to clarify details and get you a quote.</p>
                </div>
                <div className="form_itself">
                    <form>
                        Your full name:
                        <input type="text" name="fullname" value="full name" /><br />
                        Is this for a movie studio?
                        <input type="radio" name="for_movie_studio" value="yes" />Yes
                        <input type="radio" name="for_movie_studio" value="no" />No<br />
                        Company / Studio name (optional):
                        <input type="text" name="studio_name" value="company / studio" /><br />
                        Does your request fall into any of the following categories?
                        <select>
                            <option value="ring">Ring</option>
                            <option value="necklace">Necklace</option>
                            <option value="bracelet">Bracelet / Bangle</option>
                        </select><br />
                        Number of pieces:
                        <input type="number" name="no_of_pieces" /><br />
                        Describe what you imagine the custom piece(s) to look like<br />
                        <input type="textarea" name="desc" /><br />
                        Is there any custom functionality you would like in this piece (fold out, light up, hidden compartment, etc.)?<br />
                        <input type="textarea" name="functionality_desc" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Customize