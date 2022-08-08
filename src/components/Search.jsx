import React from 'react';
import '../styles/Search.css';

const Search = () => {
  return (
    <form className='search'>
      <div className="search_container">
      <span className="search_icon"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" className='search_input'/>
      </div>
    </form>
  )
}

export default Search;