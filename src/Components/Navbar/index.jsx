import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavData } from "../../Assets/NavData";


function Navbar() {
    const context = useContext(ShoppingCartContext)
    const NavItems = NavData(context)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center p-5 fixed top-0 z-10 w-full font-light">
            <ul className="flex gap-5 items-center">
                {NavItems.menuLeft.map(link => (
                <li className={link.className}
                    key={link.title}
                >
                    <NavLink 
                    to={link.to}
                    className={({isActive}) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory(link?.text)}
                    >
                        {link.title}
                    </NavLink>
                </li>
                ))}
            </ul>

            <ul className="flex gap-5 items-center">
            {NavItems.asideMenu.map(link => (
                <li
                    key={link.text}
                    >
                        <NavLink 
                        to={link.to}
                        className='${link.icon ?? flex items-center justify-center gap-1 : undefined} ${({isActive}) => isActive ? activeStyle : undefined }'>
                        {link.icon ?? link.icon}
                        {link.text}
                        </NavLink>

                </li>
                
                ))}
            </ul>
        </nav>
    )
}

export { Navbar }