import React, { Component } from 'react'

export class SpotForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(evt)=> this.props.addSpot(evt.preventDefault(),
                    evt.target["name"].value,
                    evt.target["image"].value,
                    evt.target["kind"].value,
                    evt.target["details"].value,
                    evt.target["zip"].value
                    )}>
                     <label>Name:</label>
                     <input type="text" name="name"></input>
                     <br/>
                     <label>Image:</label>
                     <input type="text" name="image"></input>
                     <br/>
                     <label>Type:</label>
                     <input type="text" name="kind"></input>
                     <br/>
                     <label>Details:</label>
                     <input type="text" name="details"></input>
                     <br/>
                     <label>Zip Code:</label>
                     <input type="text" name="zip"></input>
                     <br/>
                     <button type="submit">submit</button>
                 </form>
            </div>
        )
    }
}

export default SpotForm
