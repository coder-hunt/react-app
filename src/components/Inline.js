import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    // regular style can be access by there chld components while module scc style can't access by there child components
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
