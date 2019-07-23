
import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pushpendra',
             heroName: 'Shaktiman'
        }
    }
    
    render() {
        // const {name, heroName} = this.props
        const {name, heroName} = this.state
        return <h1> Welcome {name} a.k.a {heroName} </h1>
    }
}
