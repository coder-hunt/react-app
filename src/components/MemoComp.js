import React from 'react'

function MemoComp({name}) {
    console.log('Memo component is called')
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(MemoComp)

/**
 * Pure Component only work with class cmponent
 * if we want to use same in functional component the we should use memo component in functinal
 */