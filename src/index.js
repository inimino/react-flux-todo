import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let state

function init_state () {
  return (
    {todos: []
    }
  )
}

function evt (type, ...args) {
  let id,text
  switch (type) {
  case 'add_todo':
    state.todos.push({text:"",done:false}) // TODO: think about IDs and where they should come from
    render(state)
  break
  case 'set_todo_text':
    id = args[0]
    text = args[1]
    state.todos[id].text = text
    render(state)
  break
  default:
    throw new Error('unhandled event type '+type)
  }
}


function render (state) {
  ReactDOM.render(<App state={state}/>, document.getElementById('root'))
}

state = init_state()
evt('add_todo')
evt('set_todo_text',0,'todo: something fantastic')
render(state)
