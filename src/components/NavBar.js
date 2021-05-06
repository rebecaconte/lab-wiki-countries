import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-light nav" style={{backgroundColor: "#e3f2fd"}}>
                <h1 >Wiki Countries</h1>
            </nav>
        )
    }
}

export default NavBar