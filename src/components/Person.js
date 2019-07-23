import React from 'react'

function Person({person}) {
    console.log(person)
    return (
        <div>
            <h1>I am {person.name}. i am {person.age} years olds. i know {person.skill}</h1>
        </div>
    )
}

export default Person
