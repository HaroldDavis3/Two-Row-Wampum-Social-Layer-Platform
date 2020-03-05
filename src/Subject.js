import React, { Component } from 'react'


class Subject extends Component {

  render() {
    const index = this.props.index
    const username = this.props.subject.username
    const selected = this.props.selected
    const app = this.props.subject.app
    const animal = this.props.subject.animal
    const myKingdom = this.props.myKingdom
    const currentUsername = this.props.currentUsername
    if (!animal) {
      return null
    }

    return (
      <div
        className={`row card-deck ${selected ? 'border-primary' : ''}`}
      >
      <img className="card-img-top"
        src={`${app}/animals/${animal.id}.jpg`}
        alt={animal.name}
      />
      <div className="container row">
        <h4 className="card-title">{username}</h4>
        <p className="card-title"> <br />
        { app }</p>
        {myKingdom ?
          <button className='btn btn-primary btn-block' onClick={(event) => this.props.removeSubject(event, index)}>Delete from your Council</button>
          :
          <a
            className='btn btn-primary btn-block'
            href={`${window.location.origin}/council/${currentUsername}?add=${app}/council/${username}`}
          >Add to my council
          </a>
        }
      </div>
    </div>
    )
  }
}

export default Subject
