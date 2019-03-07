import React, { Component } from 'react'
import './App.css'

function Todo (todo) {
  return (
    <div>
      {todo.text}
    </div>
  )
}

function TodoList (props) {
  let state = props.state
  return (
    <div className="TodoList">
      {state.todos.map(Todo)}
    </div>
  )
}

function App (props) {
  // TODO (haha): actually pass in the state
  let state = props.state
  return (
    <div className="App">
      <TodoList state={state}/>
    </div>
  )
}

export default App
