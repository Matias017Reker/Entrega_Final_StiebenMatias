import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProductInCart = (newProduct) => {

        const condition = inCart(newProduct.id)
        if(condition){
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex((productCart)=> productCart.id === newProduct.id )
            tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
            
            setCart(tempCart)
        }else{
            setCart( [ ...cart, newProduct ] )
        }
        toast.success("Agregado producto al carrito");
    }

const inCart = (idProduct) => {
    return cart.some( (productCart) => productCart.id === idProduct)
}

const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
}

const totalPrice = ()=> {
    const price = cart.reduce( (total, productCart) => total + (productCart.quantity * productCart.price), 0)
    return price
}

const delateProduct = (idProduct) => {
    const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProducts)
}

const cleanCart = () => {
    setCart([])
    toast.success("El carrito esta limpio");
}

    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, delateProduct, cleanCart } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider , CartContext }