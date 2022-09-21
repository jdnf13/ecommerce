import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';

export default function RegisterForm(props) {
    const {showLoginForm} = props;
  return (
    <div>
        <Form className='register-form'>
            <Form.Input 
                name='name'
                type='fname'
                placeholder='Nombre'
            />
            <Form.Input 
                name='lastname'
                type='lname'
                placeholder='Apellidos'
            />
            <Form.Input 
                name='email'
                type='text'
                placeholder='Email'
            />
            <Form.Input 
                name='password'
                type='password'
                placeholder='Contraseña'
            />
            <Form.Input 
                name='address'
                type='text'
                placeholder='Dirección'
            />
            <Form.Input 
                name='city'
                type='text'
                placeholder='Ciudad'
            />
            <Form.Input 
                name='phone'
                type='tel'
                placeholder='Teléfono'
            />
            <div>
                <Button type='submit' className='submit' >Enviar Registro</Button>
                <Button onClick={showLoginForm}>Iniciar Sesión</Button>
            </div>

        </Form>
        
    </div>
  )
}
