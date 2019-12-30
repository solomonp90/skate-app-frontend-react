import React, { Component } from 'react'
import SpotContainer from './SpotContainer'
// import PostIndex from '../components/PostIndex'

export class MainContainer extends Component {

    state = {
        spots:[],
        spotClick: true
        
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/spots')
        .then(r => r.json())
        .then((spotsArr) => {
            this.setState({
                spots: spotsArr
            })
            // console.log(spotsArr)

            
            
        })
    }

    

    
    spotClick = (evt) => {
        console.log(evt)
        let click = this.state.spotClick
        this.setState({
            spotClick:!click
        })
    }
    

    render() {
        return (
            <div>
                < SpotContainer 
                spots={ this.state.spots } 
                spotClick={ this.spotClick } spotClickStat={this.state.spotClick}/>
                
                {/* < PostIndex 
                posts={ this.state.posts } /> */}
            </div>
        )
    }
}

export default MainContainer

