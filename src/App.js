import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';
import NewToDo from './components/NewToDo';

import StateContext from './context/StateContext';
import useInitialState from './hooks/useInitState';
import './styles//App.css';

function App() {
  const initialState = useInitialState();



  const [
    todoListTask, 
    todoTask, 
    searchTask, 
    setSearchTask, 
    setCompletedTodo,
    setDeledTodo,
    setAddTodo] = useInitialState();
  return (
    <StateContext.Provider value={initialState}>
      <div className="App">
        <Layout>
          <Header todoListTask = {todoListTask}/> 
          <Search
            searchTask = {searchTask}
            setSearchTask = {setSearchTask}
          />
          <TodoList 
            todoTask = { todoTask }
            setCompletedTodo = { setCompletedTodo }
            setDeledTodo = { setDeledTodo }
          />
          <BtnNewTodo/>
          <NewToDo setAddTodo = {setAddTodo}/>
        </Layout>
      </div>
    </StateContext.Provider>
  );
}

export default App;