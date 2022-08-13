import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';
import NewToDo from './components/NewToDo';
import AppContext from './context/AppContext';
import useInitState from './hooks/useInitState';
import './styles//App.css';

function App() {
  const initialState = useInitState();
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Layout>
          < Header /> 
          < Search />
          < TodoList />
          < BtnNewTodo />
          < NewToDo />
        </Layout>
      </div>
    </AppContext.Provider>
  );
}

export default App;