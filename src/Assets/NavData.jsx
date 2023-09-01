import { ShoppingBagIcon } from '@heroicons/react/24/solid'

function NavData(prop) {

    const menuLeft = [
        {
            to: '/',
            text: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'clothes',
            className: '' 
        },
        {
            to: '/electronics',
            text: 'electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'furnitures',
            className: ''
        },
        {
            to: '/toys',
            text: 'toys',
            className: ''
        },
        {
            to: '/others',
            text: 'others',
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
            text: `${prop.count}`,
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