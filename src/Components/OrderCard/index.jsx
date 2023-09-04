import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {
        id,
        title,
        imageUrl,
        price
    } = props

const [quantity, setQuantity] = useState(1);
const [total, setTotal] = useState(price);

const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotal(price * newQuantity );
}

const substractQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setTotal(price * newQuantity);


}

    return (
        <div className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>

                <div className='flex flex-col  '>
                    <p className='text-sm font-light '>
                        {title}
                    </p>

                    <div className='flex p-2'>
                        <button 
                        className='border px-2 flex items-center hover:bg-gray-200'
                        onClick={() => substractQuantity()}>
                        -
                        </button>
                        <p className='bg-gray-200 border px-2'>
                            {quantity}
                        </p>
                        <button
                        className='border px-2 flex items-center hover:bg-gray-200'
                        onClick={() => addQuantity({id})}>
                            +
                        </button>
                    </div>         
                            
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium w-full'>
                    ${total}
                </p>
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'> 
                </XMarkIcon>
            </div>
        </div>
    )
}

export { OrderCard }