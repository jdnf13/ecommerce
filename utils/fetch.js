import { getLogin } from "../api/sesion";
import {BASE_PATH, PATH_GETPRODUCTS} from '../utils/constants';


export async function authFetch(url,params,logout){
    const token = getLogin();
    if(!token || token !== null){
        logout();//Usuario no logueado
    } else {
        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: 'Bearer '+ token
            },
        };

        try {
            const response = await fetch(url,paramsTemp);
            const result = await response.json();
            return result;
        } catch (error) {
            return error;
        }
    }
}


export async function getProducts() {
    try {
        const url =  `${BASE_PATH}${PATH_GETPRODUCTS}`;
        const params = {
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            },            
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('No se cargaron datos de productos --> ',error);
        return null;
    }
}