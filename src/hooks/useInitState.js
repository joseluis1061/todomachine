import { useState, useEffect } from 'react';


const useInitState = () => {
  const [todoListTask, setTodoListTask] = useState([]);
  const [todoTask, setTodoTask] = useState([]);

  //Local Storage
  useEffect(()=>{
    const obtenerLocalStorage = () => {
      const remoteTodos = localStorage.getItem('todos_v1');
      if(!remoteTodos){
        console.log('Ingrese')
        localStorage.setItem('todos_v1', JSON.stringify( todoListTask ));
      }else{
        const datos = JSON.parse(remoteTodos)
        console.log('datos')
        console.log(datos)
        //Error no carga la lista datos al hacer el set
        setTodoListTask(datos)
        setTodoTask(datos)
        console.log('todoListTask')
        console.log(todoListTask)

      }
    }
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    console.log('Se actulizo la lista ')
    localStorage.setItem('todos_v1', JSON.stringify( todoListTask ));
  }, [todoListTask])



  
  const [searchTask, setSearchTask] = useState('');
  const [completedTodo, setCompletedTodo] = useState({});
  const [deledTodo, setDeledTodo] = useState({});
  const [addTodo, setAddTodo] = useState({});
  const [activeModal, setActiveModal] = useState(false);


  //Buscar una tarea
  useEffect(()=> {
    if(Object.keys(searchTask).length>0){
      const keySearch = searchTask.toLowerCase();
      const todoFilters = todoListTask.filter((todo)=>{
        return todo.task.toLowerCase().includes(keySearch);
      })
      if(Object.keys(todoFilters).length >0){
        setTodoTask(todoFilters);
        return
      }
    }else{
      setTodoTask(todoListTask);
    }
  }, [searchTask]);

  //Agregar estado completado a una tarea
  useEffect(()=>{    
    if(Object.keys(completedTodo).length>0){
      const filter = todoListTask.filter(todoList=>
        todoList.id === completedTodo.id?
          completedTodo: todoList
      )
      setTodoListTask(filter);
      setTodoTask(filter);
      setCompletedTodo({});
      setSearchTask('');
    }    
  }, [completedTodo]);

  //Deled ToDo
  useEffect(()=>{    
    if(Object.keys(deledTodo).length>0){
      const filterDelete = todoListTask.filter(todoList=>
        todoList.id !== deledTodo.id &&
          todoList
      )
      setTodoListTask(filterDelete);
      setTodoTask(filterDelete);    
      setSearchTask('');
    }    
  }, [deledTodo]);

  //Add ToDo
  useEffect(()=>{    
    if(Object.keys(addTodo).length>0){
      setTodoListTask([...todoListTask, addTodo]);
      setTodoTask([...todoListTask, addTodo]);
      console.log('Add TOdo')
      setSearchTask('');
      setAddTodo({});
    }    
  }, [addTodo]);


  return {
    todoListTask,
    todoTask,
    searchTask,
    setSearchTask,
    setCompletedTodo, 
    setDeledTodo,
    setAddTodo,
    activeModal,
    setActiveModal
  }
}

export default useInitState;