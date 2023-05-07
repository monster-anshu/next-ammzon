import React from 'react'
import { CartFeed, CartPayout , Header } from '../components'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Cart.module.css'
import { useSession } from 'next-auth/react'

const Checkout : React.FC = () : JSX.Element => {
    const session = useSession<boolean>()
    return (
        <>
            <Head>
                <title>Amazon - Cart</title>
            </Head>

            <Header />

            <main className='flex flex-col gap-y-4 mx-5 mt-3 mb-5'>
                <div className='flex flex-col md:flex-row gap-x-3 gap-y-5'>
                    <div className={style.left_container}>
                        <div className='flex justify-start pointer-events-none'>
                            <Image src='/assets/cart/amzn.gif' width='1000' height='200' alt='Amazon Live'
                            className='w-[100%]' />
                        </div>                    
                        <CartFeed />
                    </div>

                    <div className={style.right_container}>
                        <CartPayout authStatus={session.status}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Checkout