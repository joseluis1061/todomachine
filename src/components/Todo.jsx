import React from 'react';
import '../styles/Todo.css';

const Todo = ({todo}) => {
  return (
    <div className='todo'>
      <span className='todo_complete'><i className="fa-solid fa-check-double"></i></span>
      <li className='todo_task'>{todo.task}</li>
      <span className='todo_delete'><i className="fa-solid fa-trash-can"></i></span>
    </div>
  )
}

export default Todo;