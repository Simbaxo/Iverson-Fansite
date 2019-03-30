import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeClass: false }
  }

  toggleNav = () => {
    this.setState(prevState => ({
      activeClass: !prevState.activeClass
    }))
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle" onClick={this.toggleNav}>
          <i className={`fas fa-bars ${this.activeClass ? "" : " active"}`}></i>
        </span>
        <a href="/" className="logo">The Answer</a>
        <ul className="main-nav">
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="/" className="nav-links">About</a></li>
          <li><a href="/" className="nav-links">Videos</a></li>
          <li><a href="/" className="nav-links">Stats</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar