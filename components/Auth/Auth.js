import React, {useState} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default function Auth(props) {
    const {onCloseModal, settitleModal} = props;
    const [showLogin, setshowLogin] = useState(true);

    const showLoginForm = () => {
        setshowLogin(true);
        settitleModal('Inicia Sesión');
    }
    const showRegisterForm = () => {
        setshowLogin(false);
        settitleModal('Registrate')
    }

  return showLogin === true ? <LoginForm showRegisterForm={showRegisterForm}/> : <RegisterForm showLoginForm={showLoginForm}/>
}
