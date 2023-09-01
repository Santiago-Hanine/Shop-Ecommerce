import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    // Increment Cart Quantity
    const [count, setCount] = useState(0);
    
    // Show Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    const [showProduct, setShowProduct ] = useState({
        title: "",
        price: "",
        description: "",
        image: [],
    });

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            showProduct,
            setShowProduct,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

