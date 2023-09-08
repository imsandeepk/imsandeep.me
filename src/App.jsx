import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Project from './components/Project/Project'
import Status from './components/status/Status'

function App() {
  return (
    <>
    <Header/>
    <Status/>
    <Nav/>
    <About/>
    <Project/>
    <Experience/>
    <Footer/>
    </>
  )
}

export default App