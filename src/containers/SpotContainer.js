import React, { Component } from 'react'
import Spot from '../components/Spot'

export class SpotContainer extends Component {

    render() {
        
        return (
            <div>
                {
                    this.props.spots.map((spotObj)=> <ul>< Spot spot={spotObj} handleClick={this.props.spotClick} key={spotObj.id} spotClickStat={this.props.spotClickStat}/></ul>)
                }
            </div>
        )
    }
}

export default SpotContainer