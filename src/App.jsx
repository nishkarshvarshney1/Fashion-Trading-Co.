import React, { useState } from 'react'
import Footer from './components/Main/Footer/Footer';
import Header from './components/Main/Header';
import Menu from './components/Main/Menu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import LowersPage from './pages/LowersPage';
import ProductPages from './components/ProductPages/ProductPages';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-arrivals' element={<ProductPages />} />
        <Route path='/t-shirts' element={<ProductPages />} />
        <Route path='/lowers' element={<ProductPages />} />
        <Route path='/boys' element={<ProductPages />} />
      </Routes>
      <Footer />
      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>}
    </>
  )
}
export default App
