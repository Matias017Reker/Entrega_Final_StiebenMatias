import { useState } from 'react'
import FormCheckout from './FormCheckout.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import db from '../../db/db.js'
import validateForm from '../utils/validate.js'
import { toast } from 'react-toastify'
import './checkout.css'

//Check_Logica

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname:"",
        phone:"",
        email:"",
        emailConfirmation:"",
    })


    const { cart, totalPrice, cleanCart } = useContext(CartContext)

    const [idOrder, setIdOrder] = useState(null)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    } 


    const handleSubmitForm = (event) => {
        event.preventDefault()
        
        const order =  {
            buyer: { ...dataForm },
            products: cart.map(item => ({
                //id: item.id,
                name: item.name, 
                price: item.price,
                quantity: item.quantity,
                //ID no esta incluido debido a que estive 2 dias para darme cuenta de que era eso lo que me daba error
                //y no lo aceptaba Firebase, intenten descomentar id y vean que pasa
            })),
            total: totalPrice(),
            date: Timestamp.fromDate( new Date() ),
        }

        validateForm(dataForm)
        .then((response) => {
            if (response.status === "error") throw new Error(response.message);
            toast.success("Validación exitosa. Subiendo orden...");
            return uploadOrder(order);
        })
        .then(() => {
            toast.success("Orden subida exitosamente");
        })
        .catch((error) => {
            toast.error(`Error: ${error.message}`);
        });
    }


    const uploadOrder = (neworder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, neworder)
        .then( (response)=> setIdOrder(response.id) )
        .catch((error) => {
            console.log("Error al subir orden:", error);
            throw new Error("Error al subir la orden. Inténtalo nuevamente.");
        })
        .finally ( ()=> {cleanCart()})
    }

    //Web_Visual

return (
    <div>
        {
            idOrder === null ? (
                <FormCheckout
        dataForm={dataForm} 
        handleChangeInput={handleChangeInput} 
        handleSubmitForm={handleSubmitForm}
        />
            ) : (
                <div className="fin">
                    <h2> Su Orden se realizo con exito! ✅</h2>
                    <p> Este es su nro. de seguimiento: {idOrder}</p>
                    <Link className="link" to="/"> Volver a la tienda ↩ </Link>
                </div>
            )
        }
    </div>
)
}

export default Checkout
