import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';
import NewToDo from './components/NewToDo';

import { useState } from 'react';
import './styles//App.css';

const local = [
  {task:'Comer', complete:true},
  {task:'Reir',  complete:false},
  {task:'Sacar los gatos', complete:true},
  {task:'Cocinar', complete:true}
];

function App() {
  const [todoTask, useTodoTask] = useState(local);
  console.log(todoTask)
  return (
    <div className="App">
      <Layout>
        <Header todoTask = {todoTask}/> 
        <Search/>
        <TodoList todoTask={todoTask}/>
        <BtnNewTodo/>
        {/* <NewToDo/> */}
      </Layout>
    </div>
  );
}

export default App;