import React from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
