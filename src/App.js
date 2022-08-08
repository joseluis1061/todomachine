import Layout from './layout/Layout';
import Search from './components/Search';
import Header from './components/Header';

import './styles//App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/> 
        <Search/>
      </Layout>
    </div>
  );
}

export default App;