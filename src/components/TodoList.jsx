import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

const TodoList = () => {
  return (
    <section className='todo_list'>
      <div className="todo_list_container">
        <h3>Todo tasks</h3>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </section>
  )
}

export default TodoList;