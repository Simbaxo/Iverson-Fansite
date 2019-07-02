import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className='header'>About</h1>
        <hr />
      </div>
    )
  }
}

export default About
