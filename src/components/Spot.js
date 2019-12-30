import React, { Component } from 'react'

export class Spot extends Component {

    
    render() {
        const sometext = "hey"
        const { name, image, kind, details, zip} = this.props.spot
        const spot = this.props.spot
        return (
            <div>
                <div onClick={(evt)=>this.props.handleClick(evt.target.value)}>
                    <h1 >
                        {name}
                    </h1>
                        <div  style = {this.props.spotClickStat ? {display: "none"}: {display: "block"}}>
                            <img alt="spotpic" 
                            src={image}/>
                            {kind}
                            {details}
                            {zip}
                        </div>
                    

                    
                </div>

            </div>
        )
    }
}

export default Spot
