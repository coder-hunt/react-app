import React from 'react'

function FunctionClick() {
   function clickHandler() {
       console.log('Block cliecked..')
   }
    return (
        <div>
            <button onClick = {clickHandler}>Click</button> 
        </div>
    )
    // event handler is the function only not funtion call
}

export default FunctionClick
