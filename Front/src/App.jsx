import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
// import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  
  return (

    <div className="container">
      <div className="row">
      
        <Header/>
        {/* <Home/> */}
        <Footer/>
      
      </div>
    </div>

  )
}

export default App;
