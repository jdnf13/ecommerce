import { getLogin } from "../api/sesion";

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
