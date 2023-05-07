import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { useDispatch } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
import { addToCart, removeFromCart } from '../../state/slices/cartSlice'
import { cartItemType } from '../../utils/commonTypes'


const CartFeedCard = ({item} : {item: cartItemType}) => {
    const dispatch = useDispatch()
  
    const handleItemRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleItemAdd = (item : cartItemType) => {
        dispatch(addToCart(item))
    }

  return (
    <>
        <hr className='' />
        <div className='flex flex-col md-s:flex-row gap-x-4' key={item.id}>
            <div className='flex flex-row flex-[8] gap-x-6 '>
                <Image className='object-contain' loading='lazy' src={item.image} width={100} height={100} alt={item.category} />
                    <div className='flex flex-col gap-y-1 overflow-hidden justify-start w-full'>
                        <span className='font-semibold'>{item.title}</span>
                        <span className='text-sm line-clamp-2'>{item.description}</span>
                        <Rating name="read-only"
                          value={item.rating.rate}
                          precision={0.5}
                          size='small'
                          sx={{ color: '#fea21c' }}
                          readOnly
                        />
                        <span>₹<CurrencyFormat className='text-md font-medium leading-none'
                          value={item.price * 82}
                          displayType='text'
                          thousandSeparator={true}
                          decimalScale={2}
                          fixedDecimalScale={true}
                        /></span>

                        <div className='my-2 flex justify-start md-s:justify-center'>
                          <span className='bg-gray-300 rounded-md p-1 font-semibold'>Qty : {item.quantity}</span>
                        </div>
                    </div>
        </div>

        <div className='flex items-center flex-[1]'>
            <div className='flex flex-row
                    md-s:flex-col gap-x-3 md-s:gap-y-2 justify-center w-full'>
                <div className='amzn-btn-main cursor-pointer' onClick={() => {handleItemAdd(item)}}>
                    <span>Add</span>
                </div>
                
                <div className='amzn-btn-main pt-10 cursor-pointer' onClick={() => {handleItemRemove(item.id)}}>
                    <span>Remove</span>
                </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default CartFeedCard