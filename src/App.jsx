import { useState } from 'react'
import Footer from './components/Main/Footer/Footer';
import Header from './components/Main/Header';
import Menu from './components/Main/Menu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductPages from './components/ProductPages/ProductPages';
import ContactPage from './pages/ContactPage';
import BrandPage from './pages/BrandPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [searchMenu, setSearchMenu] = useState(false)
  return (
    <>
      <Header setIsMenuOpened={setIsMenuOpened} searchMenu={searchMenu} setSearchMenu={setSearchMenu}/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<ProductPages />} />
        <Route path='/brands' element={<BrandPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} setSearchMenu={setSearchMenu}/>}
    </>
  )
}
export default App
