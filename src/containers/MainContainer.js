import React, { Component } from 'react'
import SpotContainer from './SpotContainer'
import ShowContainer from './ShowContainer'
// import SpotForm from './components/SpotForm'

// import PostForm from '../components/PostForm'
// import PostIndex from '../components/PostIndex'

export class MainContainer extends Component {

    // Reminderr:needs a refactor on the backend
    
    // state = {
    //     spots:[],
    //     spotClick: true,
    //     spot: []
        
    // }

    // componentDidMount = () => {
    //     fetch('http://localhost:3000/spots')
    //     .then(r => r.json())
    //     .then((spotsArr) => {
    //         this.setState({
    //             spots: spotsArr
    //         })
    //         // console.log(spotsArr)

            
            
    //     })
    // }

    

    
    // spotClick = (spot) => {
    //     // console.log(spot)
    //     let click = this.state.spotClick
    //     this.setState({
    //         spotClick:!click,
    //         spot: [spot]
    //     })
    // }

    // spotShow = (spot) => {
    //     // console.log(spot)
    // }
    
    // addPost = (evt,author,image,content,video,spot) => {
        
    //     console.log(author,content,image,video,spot)

    //     fetch(`http://localhost:3000/posts/${spot.id}`, {
    //       method:'POST',
    //      headers: { 
    //          'Content-type': 'application/json'
    //      },
    //      body: JSON.stringify({
    //          author,
    //          content,
    //          image,
    //          video
    //       })
    //     })
    //     .then(r => r.json())
    //     .then((newPost) => {
    //         let index = spot.posts.indexOf(spot)
    //         let updatedSpots = spot.posts.splice(index,1,newPost)
    //         this.setState({
    //             spot: updatedSpots
    //         })
    //     }
    //     )

    // }
    

    render() {
        return (
            <div className="row" >
                < SpotContainer 
                spots={ this.props.spots } 
                spotClick={ this.props.spotClick } 
                spotClickStat={this.props.spotClickStat}/>
                
                < ShowContainer 
                spot={this.props.spot} 
                spotShow={this.props.spotShow} 
                spotForm={this.props.SpotForm}
                postFormWithProps={this.props.postFormWithProps}
                loggedInUserId={this.props.loggedInUserId}
                />
            </div>
        )
    }
}

export default MainContainer

