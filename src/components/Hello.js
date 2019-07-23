import React from "react";

export function Hello() {

  return React.createElement(
      'div', 
      { 
          id: 'hello', 
          className: 'dummyClass' 
      }, 
      React.createElement('h1', null, 'Hello Pushpendra')
    )
}