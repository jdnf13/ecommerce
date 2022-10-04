import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import  * as  Yup from 'yup';
import {loginApi, resetPasswordApi} from '../../../api/user';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

export default function LoginForm(props) {
    const {showRegisterForm, onCloseModal} = props;
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();

    const formik = useFormik({/**Funcion onSubmit para el formulario con formik */
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await loginApi(formData);//aqui enviar data al API
            if(response?.data && response.data.login !== 'fallido'){
                toast.success('Iniciaste Sesión');
                login(response.data._id,response.data.name,response.data.mail);
                onCloseModal();
            }else{
                toast.error(response.mensaje);
            }
            setLoading(false);
        }
    });

    const resetPassword = () => {
        formik.setErrors({});
        const validateEmail = Yup.string().email().required('*Para recuperar la contraseña requrimos tu email');

        if(!validateEmail.isValidSync(formik.values.email)){
            toast.error('Debes ingresar tu email para recuperar la constraseña');
        }else{
            resetPasswordApi(formik.values.email);
        }

    }

  return (
    <div>
        <Form className='register-form' onSubmit={formik.handleSubmit}>   
            <Form.Input onChange={formik.handleChange}
                name='email'
                type='text'
                placeholder='Email'
                error={formik.errors.email}
            />
            <Form.Input onChange={formik.handleChange}
                name='password'
                type='password'
                placeholder='Contraseña'
                error={formik.errors.password}
            />         
            <div>
                <Button type='submit' className='submit' loading={loading}>Iniciar Sesión</Button>
                <Button type='button' onClick={showRegisterForm}>Registrate</Button>
                <Button type='button' onClick={resetPassword}>¿Has olvidado tu contraseña?</Button>

            </div>
        </Form>
    </div>
  )
}

/**Valores iniciales para formik */
function initialValues(params) {
    return {
        email:'',
        password:'',
    }
}

/**Estructura de validaciones para formik */
function validationSchema(params) {
    return {
        email:Yup.string().email('* Debe ser un correo valido').required('* Este campo es requerido'),
        password:Yup.string().required('* Este campo es requerido'),
    }
}