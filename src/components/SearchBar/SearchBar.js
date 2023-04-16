import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import './SearchBar.css';

function SearchBar() {
  const { productList, searchTerm, setSearchTerm, setFiltredList } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchTerm(value);
  }

  useEffect(() => {

    const filtred = productList.filter((product) => {
      const term = searchTerm.toLowerCase();
      const productName = product.name.toLowerCase();
      return productName.includes(term);
    })
    console.log('filtrando por: ', searchTerm)
    setFiltredList(filtred);
  }, [searchTerm])

  return (
    <div className="search-container">
      <input
        name="search-input"
        className="search-input"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <img
        className="search-icon"
        src="https://cdn.pixabay.com/photo/2017/01/10/23/01/seo-1970475_960_720.png"
        alt="search.png" />
    </div>
  )
}

export default SearchBar