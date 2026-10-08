import React, { useState } from 'react'
import Header from './components/Main/Header';
import Hero from './components/Main/Hero';
import Collection from './components/Main/Collection/Collection';
import Lowers from './components/Main/Lowers/Lowers';
import TShirt from './components/Main/T-Shirts/TShirt';
import NewArrivals from './components/Main/NewArrivals/NewArrivals';
import Brands from './components/Main/Brands/Brands';
import Footer from './components/Main/Footer/Footer';
import Menu from './components/Main/Menu'

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <div className='h-fit bg-(--white)'>
      <Header setIsMenuOpened={setIsMenuOpened} />
      <Hero />
      <Collection />
      <Hero />
      <Lowers />
      <TShirt />
      <NewArrivals />
      <Brands />
      <Footer />
      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>}
    </div>
  )
}

export default App
