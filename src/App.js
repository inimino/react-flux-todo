import React, { Component } from 'react'
import './App.css'

function Todo (todo) {
  return (
    <div>
      <input type="checkbox"/>
      {todo.text}
    </div>
  )
}

function TodoList (props) {
  let state = props.state
  return (
    <div className="TodoList">
      <header>
        <h3>To Do</h3>
        <div className="controls"><button>New</button></div>
      </header>
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
