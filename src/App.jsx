import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MidContainer from './components/MidContainer/MidContainer'

function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-5xl font-bold text-primary">
        Add Products To Carts
      </h1>
      {/* <MidContainer>
        
      </MidContainer> */}
    </>
  )
}

export default App
