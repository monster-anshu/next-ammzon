import React from 'react'
import { useSelector } from 'react-redux'
import { itemCount, selectCartItems } from '../../state/slices/cartSlice'
import { cartItemType } from '../../utils/commonTypes'
import Link from 'next/link'
import CartFeedCard from './CartFeedCard'

const CartFeed = () => {
  const cartItems : cartItemType[] = useSelector(selectCartItems)
  const itemsCount : number = useSelector(itemCount)

  return (
    <>
    {
      (itemsCount)
      ? <div className='ml-4 mt-2'>
          <div className='text-3xl'>Shopping Cart</div>
          
          <div className='flex flex-col gap-y-5 mx-5 my-3'>
          {
            cartItems.map( item => (
              <CartFeedCard item={item} />
            ))
          }
          </div>
        </div>

      : <div className='flex flex-col gap-y-2 ml-3 my-8'>
          <span className='text-3xl font-semibold'>
            Your Amazon Cart is empty
          </span>
          <Link href='/'>
            <span className='flex justify-center text-[#007185] text-lg hover:underline'>Continue shopping</span>
          </Link>
        </div>
    }
    </>
  )
}

export default CartFeed