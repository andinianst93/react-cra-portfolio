import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, About, Contact, Experience, Error } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
