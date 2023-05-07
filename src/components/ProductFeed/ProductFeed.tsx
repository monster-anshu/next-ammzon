import React from 'react'
import ProductCard from './ProductCard'
import { storeProductType } from '../../utils/commonTypes'
import style from '../../styles/Product.module.css'

const ProductFeed : React.FC<{products : storeProductType[]}> = ({products}) => {

    return (
        <div className={`grid grid-cols-1 xs-l:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${style.product_feed_container}`}>
        {
            products.map(product => (
                    <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
    ) 
}

export default ProductFeed