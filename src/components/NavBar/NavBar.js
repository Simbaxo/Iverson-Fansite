import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <nav>
              <h1 className="brand"><a href="#">The <span>Answer</span></a></h1>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Stats</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default NavBar