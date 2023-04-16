import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input name="search-input" className="search-input" type="text" />
      <img
        className="search-icon"
        src="https://cdn.pixabay.com/photo/2017/01/10/23/01/seo-1970475_960_720.png"
        alt="search.png" />
    </div>
  )
}

export default SearchBar