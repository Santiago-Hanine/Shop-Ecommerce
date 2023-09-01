import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside 
                className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}  flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <div>
                    <XMarkIcon onClick={ () => context.closeProductDetail()}
                    className='h-6 w-6 text-black cursor-pointer'> </XMarkIcon>
                </div>
            </div>

            <figure className='px-6'>
                <img
                 className='w-full h-full rounded-lg'
                 src={context.showProduct.image}
                 alt={context.showProduct.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.showProduct.price}</span>
                <span className='font-medium text-md'> {context.showProduct.title}</span>
                <span className='font-light text-sm'> {context.showProduct.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail}