import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h1 onMouseOver = {this.props.incrementCount }> {this.props.name} count : {count} </h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 5)
