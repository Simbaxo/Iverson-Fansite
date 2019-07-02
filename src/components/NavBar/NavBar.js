import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <div className="container">
              <nav>
                <h1 className="brand"><Link href="/">The <span>Answer</span></Link></h1>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/videos">Videos</Link></li>
                  <li><Link href="/stats">Stats</Link></li>
                </ul>
              </nav>

              {/* Figure Out the Correct Paths */}
              {/* <Route exact path="/" component={App} />
              <Route path="/about" component={About} />
              <Route path="/video" component={Video} />
              <Route path="/stats" component={Stats} /> */}
            </div>
          </header>
        </div>
      </Router>
    )
  }
}

export default NavBar