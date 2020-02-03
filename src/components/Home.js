import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Skate Search</h1>
                <div>
                    <h6>
                        Signup or Login
                    </h6>
                    <form >
                        <label>Username:</label>
                        <input type="text"></input>
                        <label>Password:</label>
                        <input type="text"></input>
                        <Link to={"/main/"}>
                        <button type="submit" >submit</button>
                        </Link>
                         <br/>
                        <Link to={"/login"}>
                        <button type="click" >Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home
