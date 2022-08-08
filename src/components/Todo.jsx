import React from 'react';
import '../styles/Todo.css';

const Todo = () => {
  return (
    <div className='todo'>
      <span className='todo_complete'><i class="fa-solid fa-check-double"></i></span>
      <li className='todo_task'> Asar Carne Lorem y comer todo el día</li>
      <span className='todo_delete'><i class="fa-solid fa-trash-can"></i></span>
    </div>
  )
}

export default Todo;