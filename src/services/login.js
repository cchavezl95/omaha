import { urlAPI } from "../utils/config";

export const login = async (body) =>{
    try{
        const response = await fetch(`${urlAPI}/Login/LoginUser`,
        {
            method : 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        throw err
    }
}

export const updatePass = async (body) =>{
    try{
        const response = await fetch(`${urlAPI}/Login/ActualizaContraseña`,
        {
            method : 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        throw err
    }
}