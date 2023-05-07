import React from 'react'
import { signIn } from 'next-auth/react';
import { cartItemType } from '../../utils/commonTypes';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../state/slices/cartSlice';
import CurrencyFormat from 'react-currency-format';

const PayoutFeed : React.FC<{items: cartItemType[]}> = ({items}) : JSX.Element => {

    const getPayoutAmount = (items :cartItemType[]) : number => (
        (items.length > 0)
        ? items.map(item => item.price * item.quantity * 82).reduce((x,y)=>x+y)
        : 0 
    )

    const getTotalCount = (items : cartItemType[]) : number => (
        (items.length > 0)
        ? items.map(item => item.quantity).reduce((x,y)=>x+y)
        : 0
        
    )

    if (items.length > 0) {
        return (
            <div className='flex flex-col gap-y-4'>
            <span className='text-sm text-[#008500] font-semibold'>Your order qualifies for FREE Delivery.</span>
            <div>
                <div className='text-center '>
                    <span>{`Subtotal (${getTotalCount(items)} items): `}</span>
                    <span className='text-sm font-semibold'>₹</span>
                    <CurrencyFormat 
                    className='text-lg font-medium leading-none'
                    value={getPayoutAmount(items)} 
                    displayType='text'
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}/>
                </div>
                <span><input type='checkbox'/> This order contains a gift</span>
            </div>

                <div className='flex flex-col px-2'>
                    <span className='amzn-btn-main'>Proceed to buy</span>
                </div>
            </div>
    )
    }

    else return (
        <div className='text-lg weight-bold'>Add items to cart</div>
    )
}

const CartPayout : React.FC<{authStatus : string}> = ({authStatus}) : JSX.Element => {
    const cartItems : cartItemType[] = useSelector(selectCartItems)
    
    const handleSignIn = () => {
        signIn()
    }

    return (
        <div className='px-2 flex justify-center my-10'>
            {
                (authStatus === 'authenticated')
                ? <PayoutFeed items={cartItems}/>

                : <div className='flex flex-col gap-y-3'>
                    <span>You need to login to proceed</span>
                    <div className='amzn-btn-main' onClick={handleSignIn}>
                        Login to Checkout
                    </div>
                    </div>
            }
        </div>
    )
}

export default CartPayout