import React from 'react'
import ReactDOM from 'react-dom'
import ComponentClass from "./componentClass";

ReactDOM.render(
    <ComponentClass label='Contador' initialValue={10} />
, document.getElementById('app'))
