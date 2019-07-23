import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pushpendra Kumar'
        }
        console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps() {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
   
    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

   
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
               <div><h1>LifeCycleB</h1></div>
            </div>
        )
    }
}
