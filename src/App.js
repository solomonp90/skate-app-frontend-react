import React, { Component } from 'react'
import './App.css';
import MainContainer from './containers/MainContainer';
import Login from './components/Login'
import SpotForm from './components/SpotForm'
import { Layout } from './components/Layout'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  state = {
    spots:[],
    spotClick: true,
    spot: [],
    posts:[],
    post:null,
    skater:null,
    skaters: [],
    loggedIn:false,
    loggedOut:true,
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

setLogout = () => {
  
    let log = this.state.loggedIn
    localStorage.removeItem("loggedInUserId")
    localStorage.removeItem("token")
    localStorage.removeItem("skater")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("loggedOut")
    this.setState({
      loggedInUserId: null,
      token: null,
      skater:null,
      loggedIn:!log
    })
  
}


spotClick = (spot) => {
 let click = this.state.spotClick
 this.setState({
     spotClick:!click,
     spot: [spot],
     post:null
 })
}


setToken = ( token, loggedInUserId, skater) => {
  console.log("token:",token,"loggedInUserId:",loggedInUserId,"skater:",skater)
  
  if ( token ) {
    
    localStorage.clear()
    localStorage.token = token
    localStorage.loggedInUserId = loggedInUserId
    localStorage.loggedIn = !this.state.loggedIn
    localStorage.setItem('skater', JSON.stringify(skater));
    // localStorage.setItem('developers', JSON.stringify(this.state.developers));
    // localStorage.setItem('projects', JSON.stringify(this.state.projects));
    console.log("token:",token,"loggedInUserId:",loggedInUserId,"skater:",skater)
    let skater1 = JSON.parse(localStorage.getItem('skater'));
    this.setLogin()
    this.setState({
      token: token,
      loggedInUserId: loggedInUserId,
      skater:skater1
      
      
      
      
    })
    console.log("fromset token:",this.state.skater)
  } else {
    return "sorry must create an account"
  }   
}

setLogin = () => {
  let logged = this.state.loggedIn
  let loggedOut = this.state.loggedOut
  this.setState({
    loggedIn:!logged,
    loggedOut:!loggedOut
  })
  console.log("from set login",this.state.loggedIn)
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
  skater={this.state.skater}
  post={this.state.post}
  resetPost={this.resetPost}
  />

}

spotShow = () =>{
 console.log(this.state.loggedInUserId)

}

logInWithProps = () => {
  return < Login 
  setToken={this.setToken} 
  skater={this.state.skater}
  loggedInUserId={this.state.loggedInUserId}
  token={this.state.token}
  loggedOut={ this.state.loggedOut }
  loggedIn={ this.state.loggedIn }
  />
 }
 


postFormSubmission = (evt,author,content,image,video,skaterId,spot) => {
console.log("localstorage:",localStorage,"state after post form submit:",this.state)
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
    // let postArr = this.state.spot[0].posts
    // // Reminder: needs refactor - let spotShowArr = this.state.spot
    // // postArr.splice(0,1,post)
    // postArr.push(post)
    this.setState({
      post:post
    })
    console.log(post)
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
          <NavLink to="/" >Signup or Login</NavLink>
          <br/>
          <NavLink to= "/logout" onClick={ this.setLogout }>Logout</NavLink>
          <br/>
          <NavLink to= "/">Home</NavLink>
          <br/>
          <NavLink to= "/addspot">Add Spot</NavLink>
          <br/>
          <Switch>
          <Route exact path="/">
          { localStorage.token ? <Redirect to="/home" /> : this.logInWithProps }
        </Route>
          <Route  path = "/logout" component= { localStorage.skater ? this.mainWithProps : this.logInWithProps } />
          <Route  path = "/home" component= { localStorage.skater ? this.mainWithProps : this.logInWithProps } />
          <Route  path = {`/home/${this.state.spot.id}`} component= {this.mainWithProps} />
          <Route exact path = "/addspot" component= { localStorage.skater ? this.spotFormWithProps : this.logInWithProps } />
          </Switch>
          </Layout>
        </div>
      )
  )
}

}

export default App



