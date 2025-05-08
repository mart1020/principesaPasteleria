import React from 'react'

const Navbar = ({ selectedCategory, setSelectedCategory, setCurrentPage }) => {
  const categories = ['all', 'pastel', 'tarta', 'cupcakes', 'pedido personalizado']

  return (
    <nav className="navbar">
      <h1>Productos</h1>
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat)
              setCurrentPage(1) 
            }}
            className={cat === selectedCategory ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

