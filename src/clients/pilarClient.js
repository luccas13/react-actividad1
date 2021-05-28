import axios from 'axios';

export const getData = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db');
        return (res.data);
    }catch(err){
        console.error(err);
    }
}

export const postData = async (url, data) => {
    const configRequest = {
        method: 'POST',
        url: `https://api-fake-pilar-tecno.herokuapp.com/${url}`,
        data: data,
    }
    try{
        const res = await axios(configRequest);
        return(res);
    }catch(err){
        return(console.log('Ocurrió un error al cargar los datos!!!'));
    }
}

export const deleteData = async (url, indice) => {
    const configRequest = {
        method: 'DELETE',
        url: `https://api-fake-pilar-tecno.herokuapp.com/${url}/${indice}`,
    }
    try{
        const res = await axios(configRequest);
        return(res);
    }catch(err){
        return(err);
    }
}