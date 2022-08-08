import React from 'react';
import '../styles/NewToDo.css';

const NewToDo = () => {
  return (
    <section className='new_todo'>
      <h2>Escribe un nuevo <span className="purple">ToDo</span></h2>
      <textarea type='text-area' placeholder='New todo...'>
      </textarea>
      <div className="btn_container">
        <button className='btn_new btn_cancel'>
          Cancelar
        </button>
        <button className='btn_new btn_add'>
          Agregar
        </button>
      </div>
    </section>
  )
}

export default NewToDo;