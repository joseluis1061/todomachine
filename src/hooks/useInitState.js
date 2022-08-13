import { useState, useEffect } from 'react';

const local = [
  {task:'Comer', complete:true, id : 0},
  {task:'Reir',  complete:false, id : 1},
  {task:'Sacar los gatos', complete:true, id : 2},
  {task:'Cocinar', complete:true, id : 3},
  {task:'Programar', complete:true, id : 4},
];


const useInitState = () => {
  const [todoListTask, setTodoListTask] = useState(local);
  const [todoTask, setTodoTask] = useState(todoListTask);
  const [searchTask, setSearchTask] = useState('');
  const [completedTodo, setCompletedTodo] = useState({});
  const [deledTodo, setDeledTodo] = useState({});
  
  //Buscar una tarea
  useEffect(()=> {
    if(Object.keys(searchTask).length>0){
      const keySearch = searchTask.toLowerCase();
      const todoFilters = todoListTask.filter((todo)=>{
        return todo.task.toLowerCase().includes(keySearch);
      });
      if(Object.keys(todoFilters).length >0){
        setTodoTask(todoFilters);
        return
      }
    }
    setTodoTask(todoListTask);
  }, [searchTask]);

  //Agregar estado completado a una tarea
  useEffect(()=>{    
    if(Object.keys(completedTodo).length>0){
      const filter = todoListTask.filter(todoList=>
        todoList.id === completedTodo.id?
          completedTodo: todoList
      )
      setTodoListTask(filter)
      setTodoTask(todoListTask)
    }    
  }, [completedTodo])

    //Deled ToDo
    useEffect(()=>{    
      if(Object.keys(deledTodo).length>0){
        const filterDelete = todoListTask.filter(todoList=>
          todoList.id !== deledTodo.id &&
            todoList
        )
        setTodoListTask(filterDelete)
        setTodoTask(filterDelete)
      }    
    }, [deledTodo])


  return [
    todoListTask,
    todoTask,
    setTodoTask,
    searchTask,
    setSearchTask,
    setCompletedTodo, 
    setDeledTodo
  ]
}

export default useInitState