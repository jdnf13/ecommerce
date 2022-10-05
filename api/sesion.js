export function setLogin(_id,name,email){
    const token = {
        _id,name,email
    }
    localStorage.setItem('token', JSON.stringify(token));
}

export function setLogout(){
    if(localStorage.getItem('token')) localStorage.removeItem('token');

}

export function getLogin(){
    if(localStorage.getItem('token'))
        return JSON.parse(localStorage.getItem('token'));
    else 
        return null;
}