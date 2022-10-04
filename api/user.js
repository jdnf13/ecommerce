import {BASE_PATH, PATH_LOGIN, PATH_REGISTER,PATH_RESETPASSWORD} from '../utils/constants';
export async function loginApi(formData) {
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

export async function resetPasswordApi(email) {/**Este metodo queda pendiente por que no existe en el api */
    try {
        const url =  BASE_PATH+PATH_RESETPASSWORD;
        const params = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email})
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Este metodo aun no existe en el API de node, se debe crear para recuperar constraseña... --> ',error);
        return null;
    }
}
