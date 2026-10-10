import React from 'react'
import ProductHeading from './ProductHeading';
import ProductCards from './ProductCards';
import NextPage from './NextPage';
import { useParams } from 'react-router-dom';
import ProductPagesData from '../../data/ProductPagesData'

const ProductPages = () => {
    const { category } = useParams()
    const data = ProductPagesData[category]
    if (!data) return <div>Page not found</div>
    return (
        <div>
            <ProductHeading title={data.title} count={data.productCount}/>
            <ProductCards items={data.products}/>
            <NextPage title={data.title}/>
        </div>
    )
}

export default ProductPages
