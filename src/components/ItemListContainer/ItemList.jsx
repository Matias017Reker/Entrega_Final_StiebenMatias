import React from 'react'
import Item from '../item/Item'

//Lista_de_Productos_Mapeo

const ItemList = ({ products }) => {
    return (
    <div className='container'>
    {
        products.map( (product)=>(
            <Item product={product} key={product.id}/>
        ))
    }
    </div>
    )
}

export default ItemList
