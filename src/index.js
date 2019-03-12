import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let state

function init_state () {
  return (
    {todos: {}
    }
  )
}

function evt (type, ...args) {
  let id,text
  switch (type) {
  case 'add_todo':
    id = args[0]
    state.todos[id] = {text:"",done:false,ts:args[0]}
    render(state)
  break
  case 'set_todo_text':
    id = args[0]
    text = args[1]
    state.todos[id].text = text
    render(state)
  break
  case 'set_todo_done':
    id = args[0]
    state.todos[id].done = args[1]
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
evt('add_todo',1552362197333)
evt('set_todo_text',1552362197333,'todo: something fantastic')
evt('set_todo_done',1552362197333,true)
render(state)

window.evt = evt
