import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MidContainer from './components/MidContainer/MidContainer'
import ProductToCart from './components/productToCart/productToCart'
import BankTranc from './components/BankTranc/BankTranc'

function App() {

  return (
    <>
      <Navbar />
      {/* <ProductToCart> </ProductToCart> */}
      <BankTranc></BankTranc>
      {/* <MidContainer>
        
      </MidContainer> */}
    </>
  )
}

export default App
