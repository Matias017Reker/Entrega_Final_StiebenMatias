import { useState } from "react"
import "./itemcount.css"

//Logica_contador_addCarrito

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickLess = () =>{
    if(count > 1){
        setCount( count - 1)
    }
    }

    const handleClickAdd = () =>{
    if(count < stock){
        setCount( count + 1)
    }
    }

//Contador_Visual

return (
    <div className="count">
    <button className= "btn" onClick={handleClickLess}>-</button>
        <p>{count}</p>
    <button className= "btn" onClick={handleClickAdd}>+</button>
    <button className= "btncart"onClick={ () => addProduct(count) } >Enviar al Carrito</button>
    </div>
)
}

export default ItemCount
