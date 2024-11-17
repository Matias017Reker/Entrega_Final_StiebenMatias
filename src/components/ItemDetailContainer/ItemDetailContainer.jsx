import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import db from '../../db/db.js'

//Logica_Contenedor

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const { idProduct } = useParams ()

    const getProductId = () => {
        const docRef = doc( db, "products", idProduct )
        getDoc(docRef)
        .then((dataDb)=> {
            const productDb = { id: dataDb, ...dataDb.data() }

            setproduct(productDb)
        })
    }

    useEffect( ()=>{
        getProductId()
    }, [idProduct])

//Contenedor_Web_Visual

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer
