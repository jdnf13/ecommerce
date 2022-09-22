import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import  * as  Yup from 'yup';
import {registerApi} from '../../../api/user';
import { toast } from 'react-toastify';

export default function RegisterForm(props) {
    const {showLoginForm} = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({/**Funcion onSubmit para el formulario con formik */
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            console.log(response)
            if(response?.data && response.data !== null){
                toast.success('ok');
                showLoginForm();
            }else{
                toast.error(response.mensaje);
            }
            setLoading(false);
        }
    });

  return (
    <div>
        <Form className='register-form' onSubmit={formik.handleSubmit}>
            <Form.Input onChange={formik.handleChange}
                name='name'
                type='fname'
                placeholder='Nombre'
                error={formik.errors.name}
            />
            <Form.Input onChange={formik.handleChange}
                name='lastname'
                type='lname'
                placeholder='Apellidos'
                error={formik.errors.lastname}
            />
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
            <Form.Input onChange={formik.handleChange}
                name='address'
                type='text'
                placeholder='Dirección'
                error={formik.errors.address}
            />
            <Form.Input onChange={formik.handleChange}
                name='city'
                type='text'
                placeholder='Ciudad'
                error={formik.errors.city}
            />
            <Form.Input onChange={formik.handleChange}
                name='phone'
                type='tel'
                placeholder='Teléfono'
                error={formik.errors.phone}
            />
            <div>
                <Button type='submit' className='submit' loading={loading}>Enviar Registro</Button>
                <Button onClick={showLoginForm}>Iniciar Sesión</Button>
            </div>

        </Form>
        
    </div>
  )
}

/**Valores iniciales para formik */
function initialValues(params) {
    return {
        name:'',
        lastname:'',
        email:'',
        password:'',
        address:'',
        city:'',
        phone:'', 
    }
}

/**Estructura de validaciones para formik */
function validationSchema(params) {
    return {
        name:Yup.string().required('* Este campo es requerido'),
        lastname:Yup.string().required('* Este campo es requerido'),
        email:Yup.string().email('* Debe ser un correo valido').required('* Este campo es requerido'),
        password:Yup.string().required('* Este campo es requerido'),
        address:Yup.string().required('* Este campo es requerido'),
        city:Yup.string().required('* Este campo es requerido'),
        phone:Yup.string().required('* Este campo es requerido'),
    }
}