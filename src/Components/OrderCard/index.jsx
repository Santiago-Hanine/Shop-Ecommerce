import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {
        id,
        title,
        imageUrl,
        price,
        handleDelete,
    } = props
    
    return (

            <div className='flex items-center justify-between gap-2'>
                <figure className=' w-28'>
                    <img className='w-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>

                <div className='flex flex-col w-full'>
                    <p className='text-sm font-light '>
                        {title}
                    </p>         
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium w-full'>
                        ${price}
                    </p>
                    {handleDelete &&
                    <XMarkIcon 
                    onClick={() => handleDelete(id)}
                        className='h-6 w-6 text-black cursor-pointer'> 
                    </XMarkIcon>
                    }
                </div> 
            </div>


    )
}

export { OrderCard }