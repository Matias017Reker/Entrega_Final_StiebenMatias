import { object, string } from "yup";

let useSchema = object({
    fullname: string().required("Nombre completo requerido"),
    phone: string().required("Nro de telefono requerido").matches(/^\d+$/, "El número de teléfono debe contener solo dígitos"),
    email: string().email("El mail debe contener un @").required("El correo es requerido"),
    emailConfirmation: string().required("Debe confirmar su correo electrónico").test('emails-match', 'Los correos no coinciden', function(value) {
        const { email } = this.parent;
        return value === email;
    })
});
//puse el Telefono en string y no mixed porque si el casillero estaba vacio se subia igualmente la orden

const validateForm = (dataForm) => {
    return useSchema.validate(dataForm)
        .then(() => {
            return { status: "success" };
        })
        .catch((error) => {
            return { status: "error", message: error.message };
        });
};

export default validateForm