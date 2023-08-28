import { NavLink } from "react-router-dom"

const menu1 = [
    {
        to: '/',
        text: 'Shopi',
        className: 'font-semibold text-2xl'
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
]

const menu2 = [
    {
        to: '/email',
        text: 'santihanine@gmail.com',
        className: 'text-black/60'
    },
    {
        to: '/myorders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/myoccount',
        text: 'My occount',
        className: ''
    },
    {
        to: '/signin',
        text: 'Sign in',
        className: ''
    },
    {
        to: '/shoppcar',
        text: '🛒',
        className: ''
    },
]


function Navbar() {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center p-5 fixed z-10 w-full font-light">
            <ul className="flex gap-5 items-center">
                {menu1.map(link => (
                <li className={link.classNamey}
                    key={link.text}
                >
                    <NavLink 
                    to={link.to}
                    className={({isActive}) => isActive ? activeStyle : undefined }>
                        {link.text}
                    </NavLink>
                </li>
                ))}
            </ul>

            <ul className="flex gap-5 items-center">
            {menu2.map(link => (
                <li
                    key={link.text}
                    >
                        <NavLink 
                        to={link.to}
                        className={({isActive}) => isActive ? activeStyle : undefined }>
                            {link.text}
                        </NavLink>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export { Navbar }