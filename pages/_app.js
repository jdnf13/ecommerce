import 'react-toastify/dist/ReactToastify.css';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import React, {useMemo, useState, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import AuthContext from '../context/AuthContext';
import { setLogin, getLogin } from '../api/sesion';

export default function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false)

  useEffect(() => {
   const sesion = getLogin();
   if(sesion){
    setAuth({
      _id:sesion._id,
      name:sesion.name,
      email:sesion.email
    });
   }else{
    setAuth(null);
   }
   setReloadUser(false);
  }, [reloadUser])
  

  const login = (_id,name,email) => {
    setLogin(_id,name,email);
    setAuth({
      _id,name,email
    });
  }

  const authData = useMemo(/**Solo actualiza el estado cuando algun dato cambie */
    () => ({
      auth,
      login,
      logout: () => null,
      setReloadUser
    }),
    [auth] //Le indicamos que estara pendiente de los cambios en auth
  );

  if(auth === undefined) return null;

  return (
          <AuthContext.Provider value={authData}>
          <Component {...pageProps} />
          <ToastContainer
            position='top-right'
            autoClose={2000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
        </AuthContext.Provider>
  );
}
