
import React, { PureComponent } from 'react'
import ComponentE from './ComponentE';

export default class ComponentC extends PureComponent {
    render() {
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}
