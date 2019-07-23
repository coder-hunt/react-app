import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {
        
        // Short circut approach
        return this.state.isLoggedin && <div>Welcome Pushpendra</div>
        // Tenaru approach
        // return this.state.isLoggedin ? <div>Welcome Pushpendra</div> : <div>Welcome Guest</div>

        // Eelementory aproch
        // let message 
        // if(this.state.isLoggedin) {
        //     message = <div>Welcome Pushpendra</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )
        // if else approach
        // if(this.state.isLoggedin) {
        //    return (
        //        <div>
        //            Welcome Pushpendra
        //        </div>
        //    )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting