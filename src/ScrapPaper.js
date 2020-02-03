// const sometext = "hey"
const { name, image, kind, details, zip} = this.props.spot
const spot = this.props.spot
return (
    <div onClick={(evt)=>this.props.handleClick(evt.target)}>
    {<Card style={{ width: '12rem' }}>
<Card.Img variant="top" src={image} />
<Card.Body>
<Card.Title>{name}</Card.Title>
<Card.Text>
{kind}
<br/>
{details}
{zip}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
{spot.posts.map((post) => {
return <ListGroupItem>{post.content},{<img alt="postimg" src={post.image} style={{ width: '16rem' }}/>}</ListGroupItem>
}
)}
{/* <ListGroupItem>dsfvdfs</ListGroupItem>
<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
<ListGroupItem>Vestibulum at eros</ListGroupItem> */}
</ListGroup>
<Card.Body>
<Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>}
{/* {<Post/>} */}
</div>      
)





























































// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import PostForm from './components/PostForm'
import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import Spot from './components/Spot'
import Show from './components/Show'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  state = {
    spots:[],
    spotClick: true,
    spot: [],
    posts:[]
    
}



render() {
    
    return (
      (
      
          <div>
            <NavLink to= "/">Home</NavLink>
            <NavLink to= "/main">Main</NavLink>
            <Switch>
            <Route exact path = "/main" component= {this.mainWithProps} />
            <Route exact path = "/" component= {Home} />
            </Switch>
          </div>
        )
    )
}


}
    // <React.Fragment>
    //   <Layout>
    //   <Router>
    //     <Switch>
    //       <Route  path="/" component={ MainContainer }/>
    //       <Route  path={`/spots/${Spot.key}`} component={ Show }/>
    //       {/* <Route  path={`/spots/:id/edit`} component={ PostForm }/> */}
    //       <Route component={ NoMatch }/>
    //     </Switch>
    //   </Router>
    //   </Layout>
    // </React.Fragment>

export default App;







































