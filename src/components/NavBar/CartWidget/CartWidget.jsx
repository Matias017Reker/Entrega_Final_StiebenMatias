import cart_icon from "../../../assets/cart_icon.png"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import "./cartwidget.css"

//Logica_WidgetCarrito

const CartWidget = () => {

const { totalQuantity } = useContext(CartContext)

const quantity = totalQuantity()

//Web_Visual_Widget

    return(
        <Link to="/cart" className="carticon">
            <img src={cart_icon} width={"35"}/>
            <p className={quantity === 0 ? "emptynumber" : "number"}>{ totalQuantity() }</p>
        </Link>
    )
}

export default CartWidget