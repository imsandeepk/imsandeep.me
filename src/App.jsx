import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App