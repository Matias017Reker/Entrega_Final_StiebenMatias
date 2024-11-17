import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"

//Carrito_Logica

const Cart = () => {
    const { cart, totalPrice, delateProduct, cleanCart } = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div>
                <h2 className='empty'>El Carrito esta vacio ❌<br/>
                <Link to="/" className='btnback'>Volver a la Tienda</Link>
                </h2>
            </div>
        )
    }


//Web_Visual

return (
    <div className='cartbox'>
        <h2 className="carttittle">Productos Agregados🛒</h2>
        {cart.map((productCart)=> (
                <div key={productCart.id} className="listitems">
                    <img className="cartproductimg" src={productCart.image}/>
                    <p className='txt'>{productCart.name}</p>
                    <p className='txt'>Cantidad: {productCart.quantity}</p>
                    <p className='txt'>Precio unitario: ${productCart.price}</p>
                    <p className='txt'>Precio: ${productCart.quantity * productCart.price}</p>
                    <button className="btndelate" onClick={() => delateProduct(productCart.id) }>❌</button>
                </div>
            ))
        }
        <p className='txt'>Precio total: 💲{totalPrice()}</p>
        <button className="btndelate" onClick={cleanCart}>Borrar Carrito</button>
        <Link to="/Checkout" className="btndelate">Continuar Compra</Link>
    </div>
)
}

export default Cart
