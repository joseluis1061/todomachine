import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({todoTask}) => {
  const [complete, setComplete] = useState(null);
  useEffect(()=>{
    let total = todoTask.reduce((total, current)=> {
      if (current.complete) {
        total += 1;
      }
      return total;
    }, 0);
    setComplete(total);
  },[todoTask])
  
  return (
    <header className='header'>
      <h1 className='title'> <span className='purple'>ToDo</span>  Machine</h1>
      <h2 className='task_complete'>Ha completado <span className='purple'>{complete}</span> de <span className='purple'>{todoTask.length} Todo's</span></h2>
    </header>
  )
}

export default Header;