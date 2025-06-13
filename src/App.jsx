import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'
import Slider from './components/Slider'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showSlider, setShowSlider] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [selected, setSelected] = useState(1)

  return (
    <>
      <Toaster />
      <div className="bg-secondary text-base font-normal font-default w-full min-h-screen overflow-x-hidden text-primary relative">
        <main className="max-w-7xl mx-auto px-6 h-screen overflow-auto sm:overflow-hidden">
          <Header setShowSidebar={setShowSidebar} cartCount={cartCount} setShowCart={setShowCart} />
          <Main cartCount={cartCount} setCartCount={setCartCount} selected={selected} setSelected={setSelected} setShowSlider={setShowSlider} />
        </main>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
        {showCart && <Cart setShowCart={setShowCart} cartCount={cartCount} setCartCount={setCartCount} />}
        {showSlider && <Slider selected={selected} setSelected={setSelected} />}
        {(showSidebar || showCart || showSlider) && <Overlay setShowSidebar={setShowSidebar} setShowCart={setShowCart} showSidebar={showSidebar} showCart={showCart} showSlider={showSlider} setShowSlider={setShowSlider} />}
      </div>
    </>
  )
}

export default App