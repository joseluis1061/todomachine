import '../styles/Search.css';

const Search = ({searchTask, setSearchTask}) => {
  const handleSearch = (e)=>{
    const data = e.target.value;
    setSearchTask(data);
  }

  return (
    <form className='search'>
      <div className="search_container">
      <span className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input 
        type="text" 
        placeholder='Search to do...' 
        className='search_input'
        value = {searchTask}    
        onChange={handleSearch}
      />
      </div>
    </form>
  )
}

export default Search;