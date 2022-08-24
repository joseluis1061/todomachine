import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';
import TodoList from './components/TodoList';
import BtnNewTodo from './components/BtnNewTodo';
import NewToDo from './components/NewToDo';
import Modal from './modal/Modal';
import AppContext from './context/AppContext';
import useInitState from './hooks/useInitState';
import './styles//App.css';

function App() {
  const initialState = useInitState();
  const {activeModal,setActiveModal} = initialState;
  
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Layout>
          < Header /> 
          < Search />
          < TodoList />
          < BtnNewTodo />
          {
          activeModal && 
            <Modal>
              < NewToDo />
            </Modal>
          }
        </Layout>
      </div>
    </AppContext.Provider>
  );
}

export default App;