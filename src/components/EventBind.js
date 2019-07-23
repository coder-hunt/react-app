import React, { Component } from 'react'

export default class EventBind extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this) // bind this in cunstructor 
    }

    // clickHandler() {
    //    this.setState({
    //        message: 'GoodBye!'
    //    }) 
    // }

    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
             {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
             {/* <button onClick = {() => this.clickHandler()}>Click</button>   */}
             <button onClick = {this.clickHandler}> click me !  </button> 
            </div>
        )
    }
}
