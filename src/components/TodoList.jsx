import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

const TodoList = ({todoTask}) => {
  return (
    <section className='todo_list'>
      <div className="todo_list_container">
        <h3><span className="purple">Todo</span>'s tasks</h3>
        {
          todoTask.map((todo, id)=>{
            return <Todo todo ={todo} key={id}/>
          })
        }
      </div>
    </section>
  )
}

export default TodoList;