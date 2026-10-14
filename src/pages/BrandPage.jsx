import RightLeft from '../components/Main/RightLeft';
import BrandsPageCard from '../components/Main/Brands/BrandsPageCard';
import { Link } from 'react-router-dom';

const BrandPage = () => {
  return (
    <div className='uppercase mb-20 pl-3 lg:px-15'>
      <h2 className='text-8xl flex items-center justify-center my-20 tracking-tighter'>
        BRANDS
      </h2>
        <div className='grid grid-cols-4 gap-2'>
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
        <BrandsPageCard />
      </div>
      <div className='flex text-xs gap-4 my-15'>
        <Link to='/' className='text-(--gray) flex gap-1.5'> HOME <span>/</span></Link>
        <span>BRANDS</span>
    </div>
    </div>
  )
}

export default BrandPage