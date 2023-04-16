import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css';

function ProductList() {
  const { filtredList } = useContext(AppContext)

  const renderList = () => {
    return(
      <section className="product-list">
        {
          filtredList.length < 1 ?
            <h3>Desculpe, não encontrei nenhum produto</h3> :
            (
              filtredList.map((product) => (
                <ProductCard product={ product } />
              ))
            )
        }
      </section>
    )
  }

  return (
    <main>
      {
        renderList()
      }
    </main>
  )
}

export default ProductList