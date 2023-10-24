import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const {
        isProductDetailOpen,
        showProduct,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext);

    return (
        <aside 
                className={`${isProductDetailOpen ? 'flex' : 'hidden'}  flex-col fixed right-5  bottom-[50px] border bg-white border-black rounded-lg lg:w-[360px] h-[50vh]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className="font-medium text-xl">
                    Detail
                </h2>
                <div>
                    <XMarkIcon onClick={ () => closeProductDetail()}
                    className='h-6 w-6 text-black cursor-pointer'> </XMarkIcon>
                </div>
            </div>

            <figure className='px-6 h-1/2'>
                <img
                 className='w-full h-full rounded-lg'
                 src={showProduct.image}
                 alt={showProduct.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${showProduct.price}</span>
                <span className='font-medium text-md'> {showProduct.title}</span>
                <span className='font-light text-sm'> {showProduct.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail}