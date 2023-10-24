import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const OrdersCard = props => {
    const {
        totalPrice,
        totalProducts,
    } = props

    return (

            <div className='flex items-center justify-between mb-4 border border-black rounded-lg p-4 w-[30rem]'>
                <div className='w-full flex justify-between items-center'>
                    <p className='flex flex-col'>
                        <span>01.02.2023</span>
                        <span>{totalProducts} articles</span>
                    </p>
                    
                    <p className='flex items-center gap-8'>
                        <span className='text-xl font-bold'>${totalPrice}</span>
                        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                    </p>

                </div>                

            </div>


    )
}

export { OrdersCard }