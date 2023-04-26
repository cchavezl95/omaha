import { urlAPI } from "../utils/config";

export const getListPdf = async (idUser) =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetPdfbyUser?IdUser=${idUser}`,
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

export const getDocument = async (id) =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetArchivoPDf?IdFile=${id}`,
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