import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import style from '../../styles/Product.module.css'
import CurrencyFormat from 'react-currency-format';
import { storeProductType } from '../../utils/commonTypes'
import { addToCart as addToCartAction} from '../../state/slices/cartSlice';

const USD_INR_VALUE = 82;

const ProductCard : React.FC<{product : storeProductType}> = ({product}) => {
    const dispatcher = useDispatch();



    const addToCart = () => {
        // Sending the product as an action to to GLOBAL store managed by redux
        dispatcher(addToCartAction(product))
    }

    return (
        <div className={`bg-white px-4 py-5 ${style.product_card_container}`}>
            <div className='flex justify-center mb-3 h-56'>
                <Image className='object-contain' src={product.image} height={400} width={200} alt={product.title}/>
            </div>

            <div>
                <div className='h-12'>
                    <span className={`font-semibold ${style.title_container}`}>{product?.title}</span>
                </div>

                <div className='flex items-center gap-x-1 font-medium text-sky-700 mb-2'>
                    <Rating name="read-only" 
                        value={product?.rating?.rate} 
                        precision={0.5}
                        size='small'
                        sx={{color:'#fea21c'}}
                        readOnly />
                    <span className='text-xs hover:underline'>{product?.rating?.count}</span>
                </div>

                <div className={`text-fc_dark_sec mb-3 ${style.description_container}`}>
                    <span>{product?.description}</span>
                </div>

                <div className='flex align-top mb-1'>
                    <span className='text-xs leading-none'>₹</span>
                    <CurrencyFormat className='text-md font-medium leading-none'
                        value={product?.price * USD_INR_VALUE} 
                        displayType='text'
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                    />
                </div>

                <div>
                    <Image height='15' width='40' alt='prime' loading='lazy' src='/prime_marker.png' />
                </div>

                <div className='flex items-center justify-center mt-5'>
                    <div className={`w-4/5 xs-l:w-full sm:w-4/5 xl:w-3/5 text-center ${style.cart_btn}`}
                        onClick={addToCart}>
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard