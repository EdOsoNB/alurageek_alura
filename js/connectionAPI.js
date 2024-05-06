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

// GET products
const getProducts = await fetchAPI(url)

// POST product
async function createNewProduct(name, price, urlImage) {
    try {
        const product = await fetch(url, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                id: getProducts.length + 1,
                name, 
                price,
                image: urlImage
            })
        })
        if(!product.ok) {
            throw new Error("Error al agregar el producto")
        }
        // const response = await product.json()
    } catch (error) {
        console.log(error);
    }
}


export const connectionAPI = {
    getProducts, 
    createNewProduct
}