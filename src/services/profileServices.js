import { urlAPI } from "../utils/config";
export const getPic = async (id) =>{
    try{
        const response = await fetch(
            `${urlAPI}/Profile/GetProfilePic?IdUser=${id}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json();
        return data;
    }catch(err){
        throw err;
    }
}

export const setPic = async (body) =>{
    try{
        const response = await fetch(`${urlAPI}/Profile/InsertProfilePic`,
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

export const updateUser = async (body) =>{
    try{
        const response = await fetch(`${urlAPI}/Profile/UpdateProfile`,
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