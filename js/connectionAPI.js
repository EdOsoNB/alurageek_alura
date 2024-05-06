const url = 'http://localhost:3000/products'

async function fetchAPI(url) {
    try {
        const api = await fetch(url)
        if(api.status != 200) {
            throw new Error('Error en la consulta')
        }
        const response = await api.json();
        return response    
    } catch (error) {
        console.log(error);
    }
}

const products = fetchAPI(url)

export const connectionAPI = {
    products
}