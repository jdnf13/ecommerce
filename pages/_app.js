import 'react-toastify/dist/ReactToastify.css';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import React, {useMemo, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import AuthContext from '../context/AuthContext';
import { setLogin } from '../api/user';

export default function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined)

  console.log(auth);
  const login = (_id,name,email) => {
    setLogin(_id,name,email);
    setAuth({
      _id,name,email
    });
  }

  const authData = useMemo(/**Solo actualiza el estado cuando algun dato cambie */
    () => ({
      auth: {name:'JUAN DAVID',email:'jdnf13@gmail.com'},
      login,
      logout: () => null,
      setReloadUser: () => null
    }),
    []
  );

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
