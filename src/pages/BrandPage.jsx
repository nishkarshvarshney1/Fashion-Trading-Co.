import RightLeft from '../components/Main/RightLeft';
import useRowScroll from '../hooks/useRowScroll'
import BrandsPageCard from '../components/Main/Brands/BrandsPageCard';

const BrandPage = () => {
  const {rowRef, scrollLeft, scrollRight} = useRowScroll()
  return (
    <div className='uppercase my-9 pl-3 lg:pl-10 flex flex-col gap-4'>
      <h2 className='text-sm flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full border border-black bg-lime-300'></div>
        BRANDS
      </h2>
      <div className='flex gap-2 overflow-x-auto no-scrollbar' ref={rowRef}>
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
      <RightLeft onRight={scrollRight} onLeft={scrollLeft} pageButtonLabel='SHOW ALL'/>
    </div>
  )
}

export default BrandPage