import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let state = 
{todos: []
}

function render (state) {
  ReactDOM.render(<App state={state}/>, document.getElementById('root'))
}

render(state)
