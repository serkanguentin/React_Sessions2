import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const {name,salary,department}=this.props
    return (
      <div className='b'>
       <ul>
          <li>Name: {name}</li>
          <li>Salary:  {salary}</li>
          <li>Department: {department}</li>
       </ul>
      
       
      </div>
    )
  }
}
