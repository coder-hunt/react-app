import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
                UserContext E type is {this.context}
                <ComponentF />
            </div>
        )
    }
}
export default ComponentE
