import { urlAPI } from "../utils/config";

export const login = async (body) =>{
    try{
        const response = await fetch(`${urlAPI}/Login`,
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