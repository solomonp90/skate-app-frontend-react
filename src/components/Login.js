import React from 'react';
import { Link } from 'react-router-dom'

class LogIn extends React.Component {

  state = {
    logIn: true,
    name: "",
    password: "",
    zip: "",
    errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(data => {
        if (data.errors)
          this.setState({
            errors: data.errors
          })
        else
          this.props.setToken(data.token, data.skater_id)
      })
  }

  signUpSubmitted = (event) => {
    event.preventDefault()
    console.log(event.target["zip"].value)

    fetch(`http://localhost:3000/skaters`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json',
            
     },
     body: JSON.stringify({
         name: event.target["name"].value,
         zip:event.target["zip"].value,
         password:event.target["password"].value
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  render(){
    return <section>
      <ul className="errors">
        {
          this.state.errors.map(error => <li>{ error }</li>)
        }
      </ul>
      {
        this.state.logIn 
        ? <>
          <h2>Log In</h2>
          <button onClick={ () => this.setState({ logIn: false }) }>click to register</button>
          <form onSubmit={ this.logInSubmitted }>
            <label  htmlFor="log_in_username">Username</label>
            <input  id="log_in_username" 
                    type="text" 
                    onChange={ this.onChange /* for controlled form input status */ } 
                    name="name" 
                    value={ this.state.name /* for controlled form input status */ } />
           
            <label  htmlFor="log_in_password">Password</label>
            <input  id="log_in_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    < Link to={"/main"}>
            <input type="submit" />
                  </Link>
          </form>
        </>
        : <>
          <h2>Sign up</h2>
          <button onClick={ () => this.setState({ logIn: true }) }>I already signed up!!!</button>
          <form onSubmit={ this.signUpSubmitted }>
            <label  htmlFor="sign_up_username">Username</label>
            <input  id="sign_up_username" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="name" 
                    value={ this.state.name } />
             <label  htmlFor="log_in_password">Zip Code</label>
            <input  id="log_in_zipcode" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="zip" 
                    value={ this.state.zip } />
            <label  htmlFor="sign_up_password">Password</label>
            <input  id="sign_up_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    <Link to={"/main"}>
            <input type="submit" />
            </Link>
          </form>
        </>
      }
    </section>
  }

}

export default LogIn