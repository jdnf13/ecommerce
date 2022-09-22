import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import  * as  Yup from 'yup';
import {loginApi} from '../../../api/user';
import { toast } from 'react-toastify';

export default function LoginForm(props) {
    const {showRegisterForm} = props;
    
    const formik = useFormik({/**Funcion onSubmit para el formulario con formik */
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            const response = await loginApi(formData);//aqui enviar data al API
            console.log(response);
            if(response?.data && response.data.login !== 'fallido'){
                toast.success('Iniciaste Sesión');
            }else{
                toast.error(response.mensaje);
            }
        }
    });

    

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
                <Button type='submit' className='submit'>Iniciar Sesión</Button>
                <Button onClick={showRegisterForm}>Registrate</Button>
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