import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MidContainer from './components/MidContainer/MidContainer'
import ProductToCart from './components/productToCart/productToCart'

function App() {

  return (
    <>
      <Navbar />
      <ProductToCart> </ProductToCart>
      {/* <MidContainer>
        
      </MidContainer> */}
    </>
  )
}

export default App
