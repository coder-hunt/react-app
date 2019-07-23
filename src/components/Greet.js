
import React from "react";

/** Example of stateless components.
 * in this components we used arrow function 
 * we can also use simple function here to define stateless components.
 * Note: here we exports nammed function we can also use export default 
 * but there is one difference between then when we will export function as 
 * defualt then we can use it from any name like Greet to MyComponents
 * but when we exports as named then we have to imports same name into our code
 * otherwise it will produce errors.
*/

 export const Greet = (props) => {
  const {name, heroName} = props // Destructuring of parameters..
   return(
       <div>
        <h1> Hello {name} is a.k.a {heroName}</h1>
        {/* {props.children} */}
       </div>
   )
 }

// Only one div can return  from the componenets