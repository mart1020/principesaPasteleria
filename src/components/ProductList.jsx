import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ProductList = ({
  products,
  addToCart,
  currentPage,
  setCurrentPage,
  totalPages
}) => {
  return (
    <div style={{ flex: 1 }}>
      {/* Tarjetas-------------------------- */}
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {/* Paginación ------------------------------------------- */}

      <div className="pagination pagination-bottom">
        <button
          className="circle-button"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        {[...Array(totalPages).keys()].map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`circle-button ${currentPage === num + 1 ? 'active' : ''}`}
          >
            {num + 1}
          </button>
        ))}

        <button
          className="circle-button"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProductList

