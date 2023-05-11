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

export const getTipoFondo = async () =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetTpoFondo`,
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

export const getPeriodoReportes = async () =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetPeriodoReportes`,
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

export const getListPdfReportes = async (tipoFondo,periodo) =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetListPdfReportes?TpoFondo=${tipoFondo}&Periodo=${periodo}`,
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

export const getDocumentReporte = async (id) =>{
    try{
        const response = await fetch(
            `${urlAPI}/PDF/GetArchivoPDfReporte?IdFile=${id}`,
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