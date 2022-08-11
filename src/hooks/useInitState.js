import { useState, useEffect } from 'react';

const local = [
  {task:'Comer', complete:true},
  {task:'Reir',  complete:false},
  {task:'Sacar los gatos', complete:true},
  {task:'Cocinar', complete:true},
  {task:'Programar', complete:true},
];


const useInitState = () => {
  const [todoListTask, setTodoListTask] = useState(local);
  const [todoTask, setTodoTask] = useState(todoListTask);
  const [searchTask, setSearchTask] = useState('');
  
  //Buscar una tarea
  useEffect(()=> {
    if(Object.keys(searchTask).length>0){
      const keySearch = searchTask.toLowerCase();
      const todoFilters = todoListTask.filter((todo)=>{
        return todo.task.toLowerCase() === keySearch
      });
      if(Object.keys(todoFilters).length >0){
        setTodoTask(todoFilters);
        return
      }
    }
    setTodoTask(todoListTask);

  }, [searchTask]);


  return [
    todoTask,
    setTodoTask,
    searchTask,
    setSearchTask
  ]
}

export default useInitState