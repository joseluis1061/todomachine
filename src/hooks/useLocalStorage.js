import React, { useEffect } from 'react';

const useLocalStorage = () => {
  useEffect(()=>{
    console.log('Desde Local Storage');
  }, [])
  const LocalStorage = [
    {task:'Comer', complete:true, id : 0},
    {task:'Reir',  complete:false, id : 1},
    {task:'Sacar los gatos', complete:true, id : 2},
    {task:'Cocinar', complete:true, id : 3},
    {task:'Programar', complete:true, id : 4},
  ]
  return {LocalStorage}
}

export default useLocalStorage;