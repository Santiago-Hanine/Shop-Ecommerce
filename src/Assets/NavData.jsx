import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';



function NavData() {
    
    const {
        cartProducts
    } = useContext(ShoppingCartContext);

    const menuLeft = [
        {
            to: '/',
            title: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/',
            title: 'All',
            className: ''
        },
        {
            to: '/men-clothing',
            title: "men's clothing",
            text: "men's clothing",
            className: '' 
        },
        {
            to: '/electronics',
            title: 'electronics',
            text: 'electronics',
            className: ''
        },
        {
            to: "/women-clothing",
            title: "women's clothing",
            text: "women's clothing",
            className: ''
        },
        {
            to: '/jewelery',
            title: 'jewelery',
            text: 'jewelery',
            className: ''
        },

    ];
    
    const asideMenu = [
        {
            to: '/email',
            text: 'santiahnome@gmail.com',
            className: 'text-black/60'
        },
        {
            to: '/my-orders',
            text: 'My Orders',
            className: ''
        },
        {
            to: '/my-account',
            text: 'My Account',
            className: ''
        },
        {
            to: '/signin',
            text: 'Sign In',
            className: ''
        },
        {
            to: '/shoppcar',
            text: `${cartProducts.length}`,
            className: '',
            icon: <ShoppingBagIcon className='h-6 w-6 text-black'/>
        },
    ];

  return {
    menuLeft,
    asideMenu
  }
}

export {NavData};