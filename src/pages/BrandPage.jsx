import RightLeft from '../components/Main/RightLeft';
import BrandsPageCard from '../components/Main/Brands/BrandsPageCard';

const BrandPage = () => {
  return (
    <div className='uppercase mb-20 pl-3 lg:px-15'>
      <h2 className='text-8xl flex items-center justify-center my-20 '>
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
      <div>
        HOME / BRANDS
      </div>
    </div>
  )
}

export default BrandPage