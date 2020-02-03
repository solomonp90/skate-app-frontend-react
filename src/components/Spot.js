import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import Post from './Post'

export class Spot extends Component {

    render() {
        const { name, image, kind, details, zip} = this.props.spot
        const spot = this.props.spot
        return (
            <NavLink to= {`/main/${spot.id}`}>
            <div className="spot" onClick={(evt)=>this.props.handleClick(spot)} >
                <h4>
                {
                name
                }
                </h4>
                <img alt="spotimg" src={image} style={{ width: '14rem' }}/>
            </div>   
            </NavLink>  
        )
    }

}



{/* <div>
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

            </div> */}

export default Spot
