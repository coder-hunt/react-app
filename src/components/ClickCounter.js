
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={this.props.incrementCount}> {this.props.name}  clicked {count} </button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter, 10)
