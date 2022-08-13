import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

const TodoList = ({ todoTask, setCompletedTodo, setDeledTodo }) => {
  return (
    <section className='todo_list'>
      <div className="todo_list_container">
        <h3><span className="purple">Todo</span>'s tasks</h3>
        {
          todoTask.map((todo)=>{
            return <Todo 
              todo ={ todo } 
              setCompletedTodo = { setCompletedTodo } 
              setDeledTodo = { setDeledTodo } 
              key={todo.id}
            />
          })
        }
      </div>
    </section>
  )
}

export default TodoList;