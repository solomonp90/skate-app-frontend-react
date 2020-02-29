import React, { Component } from 'react'
import Spot from '../components/Spot'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class SpotContainer extends Component {

    render() {
        
        return (
            <div className="col" >
                {
                    this.props.spots.map((spotObj)=> 
                    <Card  style={{ width: '16rem' }} onClick={(evt)=> console.log(spotObj.id)}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                < Spot 
                                spot={spotObj} 
                                handleClick={this.props.spotClick} 
                                key={spotObj.id} 
                                spotClickStat={this.props.spotClickStat}
                                />
                            </ListGroup.Item>
                       </ListGroup>
                    </Card>

                        )

                        
                }
            </div>
        )
    }
}








export default SpotContainer