import {BASE_PATH, PATH_LOGIN, PATH_REGISTER} from '../utils/constants';
export async function loginApi(formData) {
    console.log('data enviada al login ---> ',formData,BASE_PATH+PATH_LOGIN);
    try {
        const url =  BASE_PATH+PATH_LOGIN;
        const params = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error al inciar sesión --> ',error);
        return null;
    }
}

export async function registerApi(formData) {
    console.log('data enviada al login ---> ',formData,BASE_PATH+PATH_REGISTER);
    try {
        const url =  BASE_PATH+PATH_REGISTER;
        const params = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error al enviar los datos de registro --> ',error);
        return null;
    }
}