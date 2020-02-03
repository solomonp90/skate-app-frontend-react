import React, { Component } from 'react'
import './App.css';
import MainContainer from './containers/MainContainer';
import Login from './components/Login'
import SpotForm from './components/SpotForm'
import { Layout } from './components/Layout'
import { Route, Switch, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  state = {
    spots:[],
    spotClick: true,
    spot: [],
    posts:[],
    skaters: [],
    loggedInUserId: null,
    token: null 
    
 }

 componentDidMount = () => {
  fetch('http://localhost:3000/spots')
  .then(r => r.json())
  .then((spotsArr) => {
      this.setState({
          spots: spotsArr,
          token: localStorage.token,
      loggedInUserId: localStorage.loggedInUserId
      })
  })

  fetch('http://localhost:3000/skaters')
  .then(r => r.json())
  .then((skaters) => {
    this.setState({
      skaters: skaters
    })
  }
  )

}

 logOutClick = () => {
  localStorage.removeItem("loggedInUserId")
  localStorage.removeItem("token")
  this.setState({
    loggedInUserId: null,
    token: null
  })
}


spotClick = (spot) => {
 let click = this.state.spotClick
 this.setState({
     spotClick:!click,
     spot: [spot]
 })
}

setToken = (token, loggedInUserId) => {
  localStorage.token = token;
  localStorage.loggedInUserId = loggedInUserId;

  this.setState({
    token: token,
    loggedInUserId: loggedInUserId
  })
}


 mainWithProps = () => {
  return <MainContainer 
  spots={this.state.spots} 
  spotClick={this.spotClick} 
  spotShow={this.spotShow} 
  spotClickStat={this.state.spotClick} 
  spot={this.state.spot} 
  spotForm={this.spotFormWithProps}
  postFormWithProps={this.postFormSubmission}
  loggedInUserId={this.state.loggedInUserId}
  />

}

spotShow = () =>{
 console.log(this.state.loggedInUserId)

}

logInWithProps = () => {
  return < Login setToken={this.setToken} />
 }
 


postFormSubmission = (evt,author,content,image,video,skaterId,spot) => {

  fetch(`http://localhost:3000/posts`, {
    method:'POST',
   headers: { 
       'Content-type': 'application/json'
   },
   body: JSON.stringify({
     author: author,
     content: content,
     image: content,
     video: video,
     spot_id: spot.id,
     skater_id: skaterId

    })
  })
  .then(r => r.json())
  .then((post) => {
    let postArr = this.state.spot[0].posts
    // Reminder: needs refactor - let spotShowArr = this.state.spot
    // postArr.splice(0,1,post)
    postArr.push(post)

    console.log(postArr)
    // this.setState({
    //   spot: [post,...spotShowArr]
    // })

  }
  )

}


spotFormSubmit = (evt,name,image,kind,details,zip) => {
  
  fetch(`http://localhost:3000/spots`, {
    method:'POST',
   headers: { 
       'Content-type': 'application/json'
   },
   body: JSON.stringify({
     name,
     image,
     kind,
     details,
     zip
    })
  })
  .then(r => r.json())
  .then((newSpot) => {
    this.setState({
      spots: [...this.state.spots, newSpot ]
    })
  }
  )
  
  
}

spotFormWithProps = () => {
 
  return <SpotForm addNewSpot={this.spotFormSubmit} />
}


 render() {
    
  return (
    (
    
        <div>
          <Layout>
          <NavLink to= "/">Signup or Login</NavLink>
          <br/>
          <NavLink to= "/main">Home</NavLink>
          <br/>
          <NavLink to= "/addspot">Add Spot</NavLink>
          <Switch>
          <Route exact path = "/" component= { this.logInWithProps } />
          <Route  path = "/main" component= { this.mainWithProps } />
          <Route  path = {`/main/${this.state.spot.id}`} component= {this.mainWithProps} />
          <Route exact path = "/addspot" component= { this.spotFormWithProps } />
          </Switch>
          </Layout>
        </div>
      )
  )
}

}

export default App



