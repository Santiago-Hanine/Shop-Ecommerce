import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard';
import {totalPrice} from '../../utils'

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        setCartProducts,
        cartProducts,
        handleDelete,
        order,
        setOrder,
    } = useContext(ShoppingCartContext);



const handleCheckout = () => {
    const orderToAdd = {
        date: '01.02.23',
        products: cartProducts,
        totalProducts: cartProducts.length,
        totalPrice: totalPrice(cartProducts),
    }
    setOrder([...order, orderToAdd])
    closeCheckoutSideMenu()
    setCartProducts([])
}
    
    return (
        <aside 
                className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed lg:right-5 lg:top-[100px] bottom-0 border bg-white border-black rounded-lg lg:w-[360px] lg:h-[35vh] h-[15vh] w-full right-0`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className="font-medium text-xl">
                    My Order
                </h2>
                <div className=''>
                    <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer' 
                    onClick={ () => closeCheckoutSideMenu()}
                    />
                </div>

            </div>
            
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map((product) => (
                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                        />
                        ))
                    }
            </div>

            <div className='px-6 '>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light text-lg'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='./my-orders/last'>
                    <button 
                        className='w-full bg-black text-white py-3 rounded-lg mb-6'
                        onClick={()=> handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}