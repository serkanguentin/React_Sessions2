import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class User extends Component {
  render() {
    const {name}=this.props
    return (
   <div className='col-md-8 mb-4'>
    <div className='card'>
     <div className=' div.card-header.d-flex.justify-content-between'>

      <h4 className='d-inline'>{name}</h4>
      <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
     </div>

    </div>
     </div>
    )
  }
}

User.prototypes={
name:PropTypes.string.isRequired,
salary:PropTypes.string.isRequired,
department:PropTypes.string.isRequired
}
