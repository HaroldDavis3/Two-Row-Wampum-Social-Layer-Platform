import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WOLF } from './constants'
import './Wolf.css'

class OptionsList extends Component {

  render() {
    const type = this.props.type
    let options = WOLF
    return (
      <div className="OptionsList container">
          <h2> { type } </h2>
          <div className="card-cascade wider reverse">                                 
            {options.map((option, index) => {
            return (
             <div mdb-card cascade="true" wider="true" reverse="true" class="my-4"></div>,

              <h4 className="card-header">{ option.name }</h4>,
              <div className="view view-cascade overlay waves-light" mdbWavesEffect>
              <img className="card-img-top"
                src={`/${type}/${option.id}.jpg`}
                alt="Card cap"
                href="#!">
              </img>
              <div class="mask rgba-white-slight"></div>

              <div mdb-card-body cascade="true" class="text-center"></div>
              <h4 mdb-card-title><strong>{ option.superpower }</strong></h4>
              <h6 class="font-weight-bold indigo-text py-2">Join Us to Establish A Corridor Of TRUTH PEACE POWER AND RIGHTEOUSNESS</h6>
              <Link to="/wolfpg1" className='btn btn-primary'>See More</Link><button/>
              </div>
            )
            })}
          </div>
      </div>
    );
  }
}

export default OptionsList 
