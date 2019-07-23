import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        }, () => {
            console.log(this.state.topic)
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()  
    }

    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>UserName : </label>
                    <input type='text' value={userName} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}     ></textarea>
                </div>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='react' >React</option>
                    <option value='angular' >Angular</option>
                    <option value='vue' >Vue</option>
                </select>
                <div>
                    <button type='submit' >Submit Details</button>
                </div>
            </form>
        )
    }
}

export default Form


/**
 * LifeCycle methods of react : 
 * 1. Mounting : when an instance of a component is being created and inserted into the DOM
 * 2. Updating : when a componenet is being re-rendered as results of changes to either its props or state
 * 3. Unmounting : when a compnent is being remove from the DOM
 * 4. Error Handling : When there is an error during rendering , in  llifecycle methd or in the cnstructor of any child compnent
 */