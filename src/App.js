import React, { Component } from 'react'
import './App.css'

/*global evt*/

function Todo (todo) {
  let id = todo.ts
  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={()=>evt('set_todo_done',id,!todo.done)}/>
      <input onChange={e=>evt('set_todo_text',id,e.target.value)} value={todo.text}/>
    </div>
  )
}

function TodoList (props) {
  let state = props.state
  return (
    <div className="TodoList">
      <header>
        <h3>To Do</h3>
        <div className="controls"><button onClick={()=>evt('add_todo',Date.now())}>New</button></div>
      </header>
      {Object.values(state.todos).map(Todo)}
    </div>
  )
}

function App (props) {
  let state = props.state
  return (
    <TodoList state={state}/>
  )
}

export default App
