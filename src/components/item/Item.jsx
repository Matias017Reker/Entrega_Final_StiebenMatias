import { Link } from "react-router-dom"
import "./item.css"

//Cards_Estructura_Productos

const item = ({ product }) => {
    return (
    <Link className="li_link" to={"/detail/" + product.id}>
    <div>
        <div className='card'>
                <img src={product.image} width="85%" />
                <h3>{product.name}</h3>
                <p className='precio'>Precio: {product.price}U$d</p>
                <button className='btn-1'>Detalles</button>
            </div>
    </div>
    </Link>
    )
}

export default item
