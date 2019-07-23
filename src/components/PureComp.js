import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log('********************************* Pure PureComponent *********************************')
        return (
            <div>
                <h1>Pure PureComponent</h1>
            </div>
        )
    }
}

/**
 * Pure components check props and there state if the props and state are change then this component will re-render
 * while regular component is not check there props and state this will re-render while its value is props and state 
 * are changed or not.
 * for testing you can use setInterval()
 * Pure Component implments shouldComponentUpdate with a shallow prop and state comparisions
 * SC of prevState and currentState if there is difference then re-rederd
 * SC of prevProps and currentProps if there is difference then re-renderd
 * it is goog ideas to ensure all the child component of the parent should be pure cmponent if parent is pure to avoid 
 * unexpected behaviours
 */