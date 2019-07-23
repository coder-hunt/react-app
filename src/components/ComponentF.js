import React, { Component } from 'react'
import { UserConsumer } from './userContext';

export default class ComponentF extends Component {
    render() {

        return (
            <UserConsumer>
                {name => { return <div>Hello {name}</div> }}
            </UserConsumer>
            )
        }
    }
