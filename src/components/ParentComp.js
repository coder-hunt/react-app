
import React, { Component } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pushpendra'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Pushpendra'
            })
        }, 2000)
    }

    render() {
        console.log('********************************* Parent Component *********************************')
        return (
            <div>
                <h1> ParentComp</h1>
                <MemoComp name = {this.state.name}/>
                {/* <PureComp />
                <RegularComp /> */}
            </div>
        )
    }
}
