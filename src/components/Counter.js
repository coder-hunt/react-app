import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {

        //     this.setState({
        //         count: this.state.count + 1
        //     }, () => {
        //         console.log('Callback is : ', this.state.count)
        //     })

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        // useState wrapup multiple calls to single call for better performance
        // does and dons
    }
     
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

