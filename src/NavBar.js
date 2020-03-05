import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

  render() {
    const username = this.props.username
    return (
<nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
<Link className="navbar-brand" to="/">Two Row Wampum Social Layer</Link>

<div className="collapse navbar-collapse" id="navbarsExampleDefault">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to={`/council/${username}`}>Your Council</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to='/mission'>Mission</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/about'>About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/turtle'>Turtle</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/wolf'>Wolf</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/bear'>Bear</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/chat'>Council Video/Chat</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/contact'>Contact</Link>
  </li>
  </ul>
</div>
<ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <Link className="nav-link" to='/me'>{username}</Link>
  </li>
</ul>
<button
  className="btn btn-primary"
  onClick={this.props.signOut.bind(this)}
>Sign out
</button>
</nav>
)
}
}

export default NavBar
