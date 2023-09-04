import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard';

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts
    } = useContext(ShoppingCartContext);
    console.log(cartProducts)

    
    return (
        <aside 
                className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg lg:w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className="font-medium text-xl">
                    My Order
                </h2>
                <div>
                    <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'> 
                    onClick={ () => closeCheckoutSideMenu()} </XMarkIcon>
                </div>

            </div>
            
            <div className='px-6'>
                {
                    cartProducts.map((product) => (
                        <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        />
                        ))
                    }
            </div>

        </aside>
    )
}

export {CheckoutSideMenu}