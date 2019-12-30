import React, { Component } from 'react'
// import Spot from '../components/Spot'
import Show from '../components/Show'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PostForm from '../components/PostForm'

export class ShowContainer extends Component {
    render() {
        // const { name , kind, image, details, zip} = this.props.spot
        const spot = this.props.spot
        return (
            <div className="row" >
                 {
                    this.props.spot.map((spotObj)=> 
                    <Card style={{ width: '20rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                < Show 
                                spot={spotObj} 
                                handleClick={this.props.spotShow} 
                                key={spotObj.id} 
                                spotClickStat={this.props.spotClickStat} 
                                addPost={this.props.addPost} 
                                formComponent={<PostForm addPost={this.props.addPost}/>} />
                            </ListGroup.Item>
                       </ListGroup>
                    </Card>

                        )                      
                }

                {/* {
                    < Show spot={spot}/>
                } */}

                {/* {
                    < Spot spot={ spot } handleClick={ this.props.spotShow}/>
                } */}
              
            </div>
        )
    }
}

export default ShowContainer

