import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserSession } from 'blockstack'
import EditMe from './EditMe'
import Council from './Council'
import NavBar from './NavBar'
import OptionsList from './OptionsList'
import Abtmiss from './Abtmiss'
import Contact from './Contact'
import Turtle from './Turtle'
import Wolf from './Wolf'
import Bear from './Bear'
import Turtlepg1 from './Turtlepg1'
import Wolfpg1 from './Wolfpg1'
import Bearpg1 from './Bearpg1'
import Chat from './Chat'
import OtherCouncils from './OtherCouncils'
import { appConfig, ME_FILENAME } from './constants'
import './SignedIn.css'


class SignedIn extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
    this.state = {
      me: {},
      savingMe: false,
      savingKingdown: false,
      redirectToMe: false
      //selectedAnimal: false,
      //selectedTerritory: false
    }

    this.loadMe = this.loadMe.bind(this)
    this.saveMe = this.saveMe.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  componentWillMount() {
    this.loadMe()
  }

  loadMe() {
    const options = { decrypt: false }
    this.userSession.getFile(ME_FILENAME, options)
    .then((content) => {
      if(content) {
        const me = JSON.parse(content)
        this.setState({me, redirectToMe: false})
      } else {
        const me = null
        this.setState({me, redirectToMe: true})
      }
    })
  }

  saveMe(me) {
    this.setState({me, savingMe: true})
    const options = { encrypt: false }
    this.userSession.putFile(ME_FILENAME, JSON.stringify(me), options)
    .finally(() => {
      this.setState({savingMe: false, redirectToMe: false})
    })
  }

  signOut(e) {
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }

  render() {
    const username = this.userSession.loadUserData().username
    const me = this.state.me
    const redirectToMe = this.state.redirectToMe
    if(redirectToMe) {
      // User hasn't configured her animal
      if(window.location.pathname !== '/me') {
        return (
          <Redirect to="/me" />
        )
      }
    }

    if(window.location.pathname === '/') {
      return (
        <Redirect to={`/council/${username}`} />
      )
    }


    return (
      <div className="SignedIn">
      <NavBar username={username} signOut={this.signOut}/>
      <Switch>
              <Route
                path='/animals'
                render={
                  routeProps => <OptionsList
                  type="animals"
                  {...routeProps} />
                }
              />
              <Route
                path='/territories'
                render={
                  routeProps => <OptionsList
                  type="territories"
                  {...routeProps} />
                }
                />
                <Route
                path='/about'
                render={
                  routeProps => <Abtmiss
                  type="about"
                  {...routeProps} />
                }
              />
              <Route
                path='/mission'
                render={
                  routeProps => <Abtmiss
                  type="mission"
                  {...routeProps} />
                }
              />
              <Route
                path='/Turtle'
                render={
                  routeProps => <Turtle
                  type="Turtle"
                  {...routeProps} />
                }
                />
                <Route
                path='/Turtlepg1'
                render={
                  routeProps => <Turtlepg1
                  type="Turtlepg1"
                  {...routeProps} />
                }
                />
                <Route
                path='/Wolf'
                render={
                  routeProps => <Wolf
                  type="Wolf"
                  {...routeProps} />
                }
              />
              <Route
                path='/Wolfpg1'
                render={
                  routeProps => <Wolfpg1
                  type="wolfpg1"
                  {...routeProps} />
                }
              />
              <Route
                path='/Bear'
                render={
                  routeProps => <Bear
                  type="Bear"
                  {...routeProps} />
                }
              />
              <Route
                path='/Bearpg1'
                render={
                  routeProps => <Bearpg1
                  type="Bearpg1"
                  {...routeProps} />
                }
              />
               <Route
                path='/chat'
                render={
                  routeProps => <Chat
                  type="chat"
                  {...routeProps} />
                }
              />
              <Route
                path='/contact'
                render={
                  routeProps => <Contact
                  type="contact"
                  {...routeProps} />
                }
              />
               
              <Route
                path='/others'
                render={
                  routeProps => <OtherCouncils
                  type="territories"
                  {...routeProps} />
                }
              />
              <Route
                path='/me'
                render={
                  routeProps => <EditMe
                  me={me}
                  saveMe={this.saveMe}
                  username={username}
                  //selectedAnimal={this.props.selectedAnimal}
                  //selectedTerritory={this.props.selectedAnimal}
                  {...routeProps} />
                }
              />
              <Route
                path={`/Council/${username}`}
                render={
                  routeProps => <Council
                  myKingdom={true}
                  protocol={window.location.protocol}
                  ruler={username}
                  currentUsername={username}
                  realm={window.location.origin.split('//')[1]}
                  {...routeProps} />
                }
              />
              <Route
                path='/Council/:protocol/:realm/:ruler'
                render={
                  routeProps => <Council
                  myKingdom={false}
                  protocol={routeProps.match.params.protocol}
                  realm={routeProps.match.params.realm}
                  ruler={routeProps.match.params.ruler}
                  currentUsername={username}
                  {...routeProps} />
                }
              />
      </Switch>
      </div>
    );
  }
}

export default SignedIn
