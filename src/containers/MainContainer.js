import React, { Component } from 'react'
import SpotContainer from './SpotContainer'
import ShowContainer from './ShowContainer'
// import PostForm from '../components/PostForm'
// import PostIndex from '../components/PostIndex'

export class MainContainer extends Component {

    state = {
        spots:[],
        spotClick: true,
        spot: []
        
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

    

    
    spotClick = (spot) => {
        // console.log(spot)
        let click = this.state.spotClick
        this.setState({
            spotClick:!click,
            spot: [spot]
        })
    }

    spotShow = (spot) => {
        // console.log(spot)
    }
    
    addPost = (evt,author,image,content,video,spot) => {
        
        console.log(author,content,image,video,spot)

        // fetch(`http://localhost:3000/posts/${spot.id}`, {
        //   method:'POST',
        //  headers: { 
        //      'Content-type': 'application/json'
        //  },
        //  body: JSON.stringify({
        //      author,
        //      content,
        //      image,
        //      video
        //   })
        // })
        // .then(r => r.json())
        // .then((newPost) => {
        //     let index = spot.posts.indexOf(spot)
        //     let updatedSpots = spot.posts.splice(index,1,newPost)
        //     this.setState({
        //         spot: updatedSpots
        //     })
        // }
        // )

    }
    

    render() {
        return (
            <div className="row" >
                < SpotContainer 
                spots={ this.state.spots } 
                spotClick={ this.spotClick } 
                spotClickStat={this.state.spotClick}/>
                
                < ShowContainer 
                spot={this.state.spot} 
                spotShow={this.spotShow} 
                addPost={this.addPost}/>

                {/* <PostForm addPost={this.addPost}/> */}
            </div>
        )
    }
}

export default MainContainer

