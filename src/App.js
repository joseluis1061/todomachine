import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';

import './styles//App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/> 
        <Search/>
        <TodoList/>
        <BtnNewTodo/>
      </Layout>
    </div>
  );
}

export default App;