import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import CarouselBanner from './components/CarouselBanner'
import Footer from './components/Footer'
import './App.css'


const App = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  // --------------------------------------------------------------------------------------productos
  const productos = [


    { id: 1,img:'src/assets/img/donas.jpg' , name: 'Pastel de Chocolate', price: 20, category: 'pastel' },
    { id: 2,img:'src/assets/img/donas.jpg' , name: 'Tarta de Manzana', price: 15, category: 'tarta' },
    { id: 3,img:'src/assets/img/donas.jpg' , name: 'Pastel de Vainilla', price: 18, category: 'pastel' },
    { id: 4,img:'src/assets/img/donas.jpg' , name: 'Tarta de Fresa', price: 16, category: 'tarta' },
    { id: 5,img:'src/assets/img/donas.jpg' , name: 'Galletas Artesanales', price: 10, category: 'otros' },
    { id: 6,img:'src/assets/img/donas.jpg' , name: 'Cupcake de Limón', price: 8, category: 'otros' },
    { id: 7,img:'src/assets/img/donas.jpg' , name: 'Cheesecake', price: 22, category: 'tarta' },
    { id: 8,img:'src/assets/img/donas.jpg' , name: 'Pastel Red Velvet', price: 21, category: 'pastel' },
    
  ]
// ---------------------------------------------------------------------------------------------------
  const filteredProducts = selectedCategory === 'all'
    ? productos
    : productos.filter(p => p.category === selectedCategory)

  const indexOfLast = currentPage * productsPerPage
  const indexOfFirst = indexOfLast - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    )
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="layout">
      <Nav></Nav>
      <CarouselBanner /> 

      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setCurrentPage={setCurrentPage}
      />


      <main className="main-content">

        <ProductList
          products={currentProducts}
          addToCart={addToCart}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        <div className="cart-sidebar">
          <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
        </div>

      </main>

      <Footer />
      
    </div>
  )
}

export default App
