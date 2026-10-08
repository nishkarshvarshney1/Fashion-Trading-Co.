import Hero from '../components/Main/Hero';
import Collection from '../components/Main/Collection/Collection';
import Lowers from '../components/Main/Lowers/Lowers';
import TShirt from '../components/Main/T-Shirts/TShirt';
import NewArrivals from '../components/Main/NewArrivals/NewArrivals';
import Brands from '../components/Main/Brands/Brands';

const Home = () => {
  return (
    <div className='h-fit bg-(--white)'>
      <Hero />
      <Collection />
      <Hero />
      <Lowers />
      <TShirt />
      <NewArrivals />
      <Brands />
    </div>
  )
}

export default Home
