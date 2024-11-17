import ItemList from "./ItemList.jsx"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

//Logica_Listado

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([]);
    const { idcategory } = useParams();


    const getProducts = () => {
        const productsRef = collection( db, "products" )
        getDocs(productsRef)
        .then((dataDb)=> {
            const productsDb = dataDb.docs.map((productDb)=> {
                return { id: productDb.id, ...productDb.data() }
            })
            setProducts(productsDb)
        })
    }

    const getProductsCategory = () => {
        const productsRef = collection( db, "products" )
        const queryCategory = query( productsRef, where("category", "==", idcategory) )
        getDocs(queryCategory)
        .then((dataDb)=> {
            const productsDb = dataDb.docs.map( (productDb)=> {
                return { id: productDb.id, ...productDb.data() }
            })
        setProducts(productsDb)
        })
    }

    useEffect(() => {
        if(idcategory){
            getProductsCategory()
        }else{
            getProducts()
        }
    }, [idcategory]);

//Listado_Productos

    return (
    <div>
        <ItemList products={products} />
    </div>
    );
};

export default ItemListContainer;