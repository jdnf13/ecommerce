import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { getLogin } from '../api/sesion';
import useAuth from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout';

export default function cuenta() {
  const [user, setUser] = useState(undefined);
  const {auth, logout} = useAuth;
  const router = useRouter();

  useEffect(() => {
    (async() => {
      const response = await getLogin(logout);
      setUser(response || null);
    })()
  }, [auth]);

  if(user === undefined) return null;
  if(!user && !auth){
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="cuenta">
      <Configuration/>
    </BasicLayout>
  )
}

function Configuration(){
  return (
    <div   className='cuenta__configuracion'>
      <h1  className='title'>Configuración de cuenta</h1>
      <div className='data'>Formularios de configuración</div>
    </div>
  );
}
