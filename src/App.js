import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Spot from './components/Spot'
import Show from './components/Show'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
// import PostForm from './components/PostForm'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
   
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route  path="/" component={ MainContainer }/>
          <Route  path={`/spots/${Spot.key}`} component={ Show }/>
          {/* <Route  path={`/spots/:id/edit`} component={ PostForm }/> */}
          <Route component={ NoMatch }/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  )
}

export default App;

