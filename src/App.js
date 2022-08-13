import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';
import NewToDo from './components/NewToDo';

import useInitialState from './hooks/useInitState';

import { useState } from 'react';
import './styles//App.css';

function App() {
  const [
    todoListTask, 
    todoTask, 
    setTodoTask, 
    searchTask, 
    setSearchTask, 
    setCompletedTodo,
    setDeledTodo] = useInitialState();
  return (
    <div className="App">
      <Layout>
        <Header todoListTask = {todoListTask}/> 
        <Search
          setSearchTask = {setSearchTask}
        />
        <TodoList 
          todoTask = { todoTask }
          setCompletedTodo = { setCompletedTodo }
          setDeledTodo = { setDeledTodo }
        />
        <BtnNewTodo/>
        {/* <NewToDo/> */}
      </Layout>
    </div>
  );
}

export default App;