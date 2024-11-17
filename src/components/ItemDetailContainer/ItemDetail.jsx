import "./itemdetail.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount" 

//Logica_Pagina_Producto_Detallado

const ItemDetail = ({ product }) => {

    const { addProductInCart } = useContext(CartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    }

//Visual_Producto_Detallado

    return (
        <div className="detail">
            <img className="img" src={product.image} width="25%"/>
            <div>
                <h3 className="name">{product.name}</h3>
                <p className="descr">{product.description}</p>
                <p className="price">Precio: {product.price}U$d</p>
                <ItemCount stock={product.stock} addProduct={addProduct}/>
                <Link to="/Cart" className="btn-2">Terminar Compra</Link>
            </div>
        </div>
    )
}

export default ItemDetail
