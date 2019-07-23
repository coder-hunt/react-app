import React from 'react'
import Person from './Person';

function NameList() {
    // let persons = [
    //     {
    //         id:1,
    //         name: 'Bruce',
    //         age: 28,
    //         skill: 'angular'
    //     },
    //     {
    //         id:2,
    //         name: 'Clark',
    //         age: 30,
    //         skill: 'Vue.js'
    //     },
    //     {
    //         id:3,
    //         name: 'Diana',
    //         age: 25,
    //         skill: 'ReactJs'
    //     }
    // ]
    // let personList = persons.map(person => <Person person = {person} />)
    // return ( <div>{personList}</div> )
    let names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    let nameList = names.map(name => <h1 key = {name}>  {name}</h1>)
    return <div>{nameList}</div>
}

export default NameList