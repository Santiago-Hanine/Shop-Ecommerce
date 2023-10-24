import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const Card = ({data}) => {
    
    const {
        openProductDetail,
        setShowProduct,
        setCount,
        count,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,

    } = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        openProductDetail()
        setShowProduct(productDetail)
    }

    const addProductsToCart = (e, productData) => {
        e.stopPropagation()
        setCount(count + 1)
        setCartProducts( [...cartProducts, productData])
        openCheckoutSideMenu()
    }

 const renderIcon = (id) => {
    const isInCart = cartProducts.some(product => product.id === id)
    return (

        isInCart ?  (
            <button className="absolute top-0 right-0 flex justify-center  items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                <CheckIcon className='h-6 w-6 text-white'> </CheckIcon>
            </button>
        ) 
        : (
            <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(e) => addProductsToCart(e, data) }>
                <PlusIcon className='h-6 w-6 text-black'> </PlusIcon>
            </button>
            )

        )
    }
    
    return (
        <div className="bg-white cursor-pointer w-60 h-72 rounded-lg shadow-lg"
            onClick={() => showProduct(data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className="absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5 uppercase">{data?.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data?.image} alt={data?.title} />
                    {renderIcon(data?.id)}

            </figure>
            <p className="flex justify-between bg-white p-2">
                <span className="text-xs font-light w-2/3">{data?.title}</span>
                <span className="text-sm font-bold">${data?.price}</span>
            </p>
        </div>
    )
}

export { Card }