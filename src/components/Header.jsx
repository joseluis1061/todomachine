import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'> <span className='purple'>ToDo</span>  Machine</h1>
      <h2 className='task_complete'>Ha completado <span className='purple'>2</span> de <span className='purple'>3 Todo's</span></h2>
    </header>
  )
}

export default Header;