import React, {Component} from "react";

export class Messages extends Component {
    constructor(){
        super()
        this.state = {
            messages: "Welcome visitor" 
        }
    }

  changeMessage () {
    this.setState({
        messages: "Thanks for subscribe us!"
    })
  }

  render() {
      return (
          <div>
              <h1>{this.state.messages}</h1>
              <button onClick = {() => {this.changeMessage()}}>Subscribe</button>
          </div>
      )
  }
}