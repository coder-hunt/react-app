import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

/** Mounting life cycle methods example */

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pushpendra Kumar'
        }
    
        console.log('LifeCycleA constructor')
    }
    
    static getDerivedStateFromProps() {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
   
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'CodeMyMobile'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <h1>LifeCycleA</h1>
                <button onClick = {this.changeState}>Change State </button>
                <LifeCycleB />
            </div>
        )
    }
}
