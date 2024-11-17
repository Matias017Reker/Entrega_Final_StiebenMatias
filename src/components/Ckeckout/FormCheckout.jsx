import React from 'react'
import './formcheckout.css'

//Formulario_Comprador

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
return (
    <form className="form_style" onSubmit={handleSubmitForm}>
            <label>Nombre Completo</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>

            <label>Numero de Telefono</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>

            <label>Correo electronico</label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>

            <label>Confirmar Correo electronico</label>
            <input type="email" name="emailConfirmation" value={dataForm.emailConfirmation} onChange={handleChangeInput}/>

            <button className="submit-btn" type="submit">Enviar</button>
        </form>
)
}

export default FormCheckout
