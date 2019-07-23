import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }
    this.greetMethods = this.greetMethods.bind(this)
  }

  greetMethods (childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render () {
    return (
      <div>
        <ChildComponent greetHandler={this.greetMethods} />
      </div>
    )
  }
}
