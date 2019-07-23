import React from 'react'

export default function Heros({heroName}) {
    if(heroName == 'Jocker') {
        throw new Error('Not an hero!!')
    }
    return (
        <div>
            <h1>{heroName}</h1>
        </div>
    )
}
