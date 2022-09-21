import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react';

export default function LoginForm(props) {
    const {showRegisterForm} = props;
  return (
    <div>
        <Form className='register-form'>            
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
            <div>
                <Button type='submit' className='submit'>Iniciar Sesión</Button>
                <Button onClick={showRegisterForm}>Registrate</Button>
            </div>
        </Form>
    </div>
  )
}
